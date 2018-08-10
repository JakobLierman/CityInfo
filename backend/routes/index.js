var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let Bericht = mongoose.model('Bericht');
let Reactie = mongoose.model('Reactie');
let Categorie = mongoose.model('Categorie');
let Regio = mongoose.model('Regio');
let User = mongoose.model('User');
let jwt = require('express-jwt');

// let auth = jwt({ secret: process.env.CITYINFO_BACKEND_SECRET });

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('server works');
});

/* GET berichten */
router.get('/API/berichten', function(req, res, next) {
  // auth toevoegen
  let query = Bericht.find()
    .populate('reacties')
    .populate('categorie')
    .populate('user');
  query.exec(function (err, berichten) {
    if (err) return next(err);
    res.json(berichten);
  });
});

/* POST bericht */
router.post('/API/berichten/', function(req, res, next) {
  // auth toevoegen
  let bericht = new Bericht({
    titel: req.body.titel,
    boodschap: req.body.boodschap,
    categorie: req.body.categorie
  });
  // bericht.user = req.user._id;
  bericht.reacties = [];
  bericht.save(function (err, rec) {
    if (err) return next(err);
    res.json(rec);
  });
});

router.param('bericht', function (req, res, next, id) {
  let query = Bericht.findById(id)
    .populate('reacties')
    .populate('categorie')
    .populate('user');
  query.exec(function (err, bericht) {
    if (err) return next(err);
    if (!bericht) return next(new Error('not found ' + id));
    req.bericht = bericht;
    return next();
  });
});

/* GET één bericht */
router.get('/API/bericht/:bericht', function(req, res, next) {
  res.json(req.bericht);
});

/* DELETE bericht */
router.delete('/API/bericht/:bericht', function(req, res) {
  // auth toevoegen
  Reactie.remove({_id: {$re: req.bericht.reacties}}, function (err) {
    if (err) return next(err);
    req.bericht.remove(function (err) {
      if (err) return next(err);
      res.json(req.bericht);
    });
  });
});

/* GET reacties van bericht */
router.get('/API/bericht/:bericht/reacties', function(req, res, next) {
  // auth toevoegen
  Reactie.find(function (err, reacties) {
    if (err) return next(err);
    res.json(reacties);
  });
});

/* POST reactie op bericht */
router.post('/API/bericht/:bericht/reacties', function(req, res, next) {
  // auth toevoegen
  let reactie = new Reactie(req.body);
  reactie.save(function (err, reactie) {
    if (err) return next(err);
    req.bericht.reacties.push(reactie);
    req.bericht.save(function (err, rec) {
      if (err) return next(err);
      res.json(reactie);
    });
  });
});

router.param('reactie', function (req, res, next, id) {
  let query = Reactie.findById(id);
  query.exec(function (err, reactie) {
    if (err) return next(err);
    if (!reactie) return next(new Error('not found ' + id));
    req.reactie = reactie;
    return next();
  });
});

/* DELETE één reactie */
router.delete('/API/bericht/:bericht/reactie/:reactie', function(req, res) {
  // auth toevoegen
  req.reactie.remove(function (err) {
    if (err) return next(err);
    res.json(req.reactie);
  });
});

/* GET alle categorieen */
router.get('/API/categorieen', function(req, res, next) {
  Categorie.find(function(err, categorieen) {
    if (err) return next(err);
    res.json(categorieen);
  });
});

/* POST Categorie */
router.post('/API/categorieen', function (req, res, next) {
  let categorie = new Categorie({naam: req.body.naam, graad: req.body.graad});
  categorie.save(function (err, rec) {
    if (err) return next(err);
    res.json(rec);
  });
});

/* DELETE categorie */
// Niet nodig, categorieën werden vooraf bepaald.

/* RESET DATABASE */
router.post('/API/reset_db', (req, res, next) => {
  Bericht.find({}, (err, berichten) => {
    berichten.forEach(bericht => bericht.remove());
  });
  Reactie.find({}, (err, reacties) => {
    reacties.forEach(reactie => reactie.remove());
  });
  /*   Categorie.find({}, (err, categorieen) => {
    categorieen.forEach(categorie => categorie.remove());
  }); */
  Regio.find({}, (err, regios) => {
    regios.forEach(regio => regio.remove());
  });
  User.find({}, (err, users) => {
    users.forEach(user => user.remove());
  });
  res.send('Reset complete.');
  res.status(204).end();
});

module.exports = router;
