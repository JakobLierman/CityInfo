var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let Bericht = mongoose.model('Bericht');
let Reactie = mongoose.model('Reactie');
let Categorie = mongoose.model('Categorie');
let Regio = mongoose.model('Regio');
let User = mongoose.model('User');
let jwt = require('express-jwt');

let auth = jwt({ secret: process.env.CITYINFO_BACKEND_SECRET });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('server works');
});

/* GET berichten */
router.get('/API/berichten', function(req, res, next) {
  // auth toevoegen
  let query = Bericht.find().populate('reacties');
  query.exec(function(err, berichten) {
    if (err) {
      return next(err);
    }
    res.json(berichten);
  });
});

/* POST bericht */
router.post('/API/berichten/', function(req, res, next) {
  // auth toevoegen
  Reactie.create(req.body.reacties, function(err, reacs) {
    if (err) {
      return next(err);
    }
    let bericht = new Bericht({
      titel: req.body.titel,
      boodschap: req.body.boodschap,
      categorie: req.body.categorie._id
    });
    bericht.reacties = reacs;
    bericht.user = req.user._id;
    bericht.save(function(err, rec) {
      if (err) {
        Ingredient.remove({ _id: { $in: bericht.reacties } });
        return next(err);
      }
      res.json(rec);
    });
  });
});

/* DELETE bericht */

/* GET reacties van bericht */
/* router.get('/API/bericht/:bericht/reacties', function(req, res, next) {
  // auth toevoegen
  Reactie.find(function(err, reacties) {
    if (err) {
      return next(err);
    }
    res.json(reacties);
  });
}); */

/* POST reactie op bericht */
/* router.post('/API/bericht/:bericht/reacties', function(req, res, next) {
  // auth toevoegen
  let reactie = new Reactie(req.body);
  reactie.save(function(err, reactie) {
    if (err) {
      return next(err);
    }
    req.bericht.reacties.pus(reactie);
    req.bericht.save(funtion (err, rec) {
      if (err) {
        return next(err);
      }
      res.json(reactie);
    });
  });
}); */

/* GET alle categorieen */
router.get('/API/categorieen', function(req, res, next) {
  Categorie.find(function(err, categorieen) {
    if (err) {
      return next(err);
    }
    res.json(categorieen);
  });
});

/* POST Categorie */
router.post('/API/categorieen', function(req, res, next) {
  // auth toevoegen ?
  let categorie = new Categorie({ naam: req.body.naam, graad: req.body.graad });
  categorie.save(function(err, rec) {
    if (err) {
      return next(err);
    }
    res.json(rec);
  });
});

/* DELETE categorie */

/* RESET DATABASE */
router.post('/API/reset_db', (req, res, next) => {
  Bericht.find({}, (err, berichten) => {
    berichten.forEach(bericht => bericht.remove());
  });
  Reactie.find({}, (err, reacties) => {
    reacties.forEach(reactie => reactie.remove());
  });
  Categorie.find({}, (err, categorieen) => {
    categorieen.forEach(categorie => categorie.remove());
  });
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
