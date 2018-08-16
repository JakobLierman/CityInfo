var express = require("express");
var router = express.Router();
let mongoose = require("mongoose");
let Bericht = mongoose.model("Bericht");
let Reactie = mongoose.model("Reactie");
let Categorie = mongoose.model("Categorie");
let Regio = mongoose.model("Regio");
let User = mongoose.model("User");
let jwt = require("express-jwt");

let auth = jwt({secret: process.env.CITYINFO_BACKEND_SECRET});

/* GET home page. */
router.get("/API", function (req, res, next) {
  res.send("CityInfo server up and running");
});

/* GET berichten */
router.get("/API/berichten", auth, function (req, res, next) {
  let query = Bericht.find()
    .populate({path: "reacties", populate: {path: "user"}})
    .populate("categorie")
    .populate("user");
  query.exec(function (err, berichten) {
    if (err) return next(err);
    res.json(berichten);
  });
});

/* POST bericht */
router.post("/API/berichten/", auth, function (req, res, next) {
  let bericht = new Bericht({
    titel: req.body.titel,
    boodschap: req.body.boodschap,
    categorie: req.body.categorie,
    user: req.body.user,
    created: req.body.created
  });
  bericht.reacties = [];
  bericht.save(function (err, bericht) {
    if (err) return next(err);
    res.json(bericht);
  });
});

router.param("bericht", function (req, res, next, id) {
  let query = Bericht.findById(id)
    .populate({path: "reacties", populate: {path: "user"}})
    .populate("user")
    .populate("categorie");
  query.exec(function (err, bericht) {
    if (err) return next(err);
    if (!bericht) return next(new Error("not found " + id));
    req.bericht = bericht;
    return next();
  });
});

/* GET één bericht */
router.get("/API/bericht/:bericht", auth, function (req, res, next) {
  res.json(req.bericht);
});

/* DELETE bericht */
router.delete("/API/bericht/:bericht", auth, function (req, res) {
  Reactie.remove({_id: {$in: req.bericht.reacties}}, function (err) {
    if (err) return next(err);
    req.bericht.remove(function (err) {
      if (err) return next(err);
      res.json(req.bericht);
    });
  });
});

/* GET reacties van bericht */
router.get("/API/bericht/:bericht/reacties", auth, function (req, res, next) {
  let query = Reactie.find().populate("user");
  query.exec(function (err, reacties) {
    if (err) return next(err);
    res.json(reacties);
  });
});

/* POST reactie op bericht */
router.post("/API/bericht/:bericht/reacties", auth, function (req, res, next) {
  let reactie = new Reactie({
    boodschap: req.body.boodschap,
    user: req.body.user,
    dateAdded: req.body.created
  });
  reactie.save(function (err, reactie) {
    if (err) return next(err);
    req.bericht.reacties.push(reactie);
    req.bericht.save(function (err, bericht) {
      if (err) return next(err);
      res.json(reactie);
    });
  });
});

router.param("reactie", function (req, res, next, id) {
  let query = Reactie.findById(id).populate("user");
  query.exec(function (err, reactie) {
    if (err) return next(err);
    if (!reactie) return next(new Error("not found " + id));
    req.reactie = reactie;
    return next();
  });
});

/* DELETE één reactie */
router.delete("/API/bericht/:bericht/reactie/:reactie", auth, function (req, res) {
  req.reactie.remove(function (err) {
    if (err) return next(err);
    res.json(req.reactie);
  });
});

/* GET alle categorieen */
router.get("/API/categorieen", auth, function (req, res, next) {
  Categorie.find(function (err, categorieen) {
    if (err) return next(err);
    res.json(categorieen);
  });
});

/* POST Categorie */
router.post("/API/categorieen", auth, function (req, res, next) {
  let categorie = new Categorie({naam: req.body.naam, graad: req.body.graad});
  categorie.save(function (err, categorie) {
    if (err) return next(err);
    res.json(categorie);
  });
});

/* DELETE categorie */
// Niet nodig, categorieën werden vooraf bepaald.

/* GET Regios */
router.get("/API/regios", function (req, res, next) {
  Regio.find(function (err, regios) {
    if (err) return next(err);
    res.json(regios);
  });
});

/* POST Regio */
router.post("/API/regios", auth, function (req, res, next) {
  let regio = new Regio({naam: req.body.naam});
  regio.save(function (err, regio) {
    if (err) return next(err);
    res.json(regio);
  });
});

router.param("regio", function (req, res, next, id) {
  let query = Regio.findById(id);
  query.exec(function (err, user) {
    if (err) return next(err);
    if (!user) return next(new Error("not found " + id));
    req.user = user;
    return next();
  });
});

/* Get één regio */
router.get("/API/regio/:regio", auth, function (req, res, next) {
  res.json(req.regio);
});

/* DELETE Regio */
// Niet nodig, regio's werden vooraf bepaald.

/* RESET DATABASE */
router.post("/API/reset_db", auth, (req, res, next) => {
  Bericht.find({}, (err, berichten) => {
    berichten.forEach(bericht => bericht.remove());
  });
  Reactie.find({}, (err, reacties) => {
    reacties.forEach(reactie => reactie.remove());
  });
  User.find({}, (err, users) => {
    users.forEach(user => user.remove());
  });
  /*   Categorie.find({}, (err, categorieen) => {
    categorieen.forEach(categorie => categorie.remove());
  }); */
  /*Regio.find({}, (err, regios) => {
    regios.forEach(regio => regio.remove());
  });*/
  res.send("Reset complete.");
  res.status(204).end();
});

module.exports = router;
