let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let User = mongoose.model("User");
let passport = require("passport");
let jwt = require("express-jwt");

let auth = jwt({ secret: process.env.CITYINFO_BACKEND_SECRET });

/* GET users listing. */
router.get("/", auth, function(req, res, next) {
  let query = User.find().populate("regio");
  query.exec(function(err, users) {
    if (err) return next(err);
    res.json(users);
  });
});

router.param("user", function(req, res, next, id) {
  let query = User.findById(id).populate("regio");
  query.exec(function(err, user) {
    if (err) return next(err);
    if (!user) return next(new Error("not found " + id));
    req.user = user;
    return next();
  });
});

router.get("/:user", auth, function(req, res, next) {
  res.json(req.user);
});

router.post("/register", function(req, res, next) {
  if (
    !req.body.username ||
    !req.body.password ||
    !req.body.email ||
    !req.body.voornaam ||
    !req.body.familienaam ||
    !req.body.regio
  ) {
    return res.status(400).json({ message: "Please fill out all fields." });
  }
  let user = new User();
  user.username = req.body.username;
  user.setPassword(req.body.password);
  user.voornaam = req.body.voornaam;
  user.familienaam = req.body.familienaam;
  user.email = req.body.email;
  user.regio = req.body.regio;
  user.save(function(err) {
    if (err) {
      return next(err);
    }
    return res.json({ token: user.generateJWT() });
  });
});

router.post("/login", function(req, res, next) {
  if (!req.body.username || !req.body.password) {
    return res.status(400).json({ message: "Please fill out all fields." });
  }
  passport.authenticate("local", function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (user) {
      return res.json({ token: user.generateJWT() });
    } else {
      return res.status(401).json(info);
    }
  })(req, res, next);
});

router.post("/checkusername", function(req, res, next) {
  User.find({ username: req.body.username }, function(err, result) {
    if (result.length) {
      res.json({ username: "alreadyexists" });
    } else {
      res.json({ username: "ok" });
    }
  });
});

module.exports = router;
