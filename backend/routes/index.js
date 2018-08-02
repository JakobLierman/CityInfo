var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let Bericht = mongoose.model('Bericht');
let Reactie = mongoose.model('Reactie');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('server works');
});

/* GET berichten */
router.get('/API/berichten/', function(req, res, next) {
  Bericht.find(function(err, berichten) {
    if (err) {
      return next(err);
    }
    res.json(berichten);
  });
});

/* POST bericht */
router.post('/API/berichten/', function(req, res, next) {
  let bericht = new Bericht(req.body);
  bericht.save(function(err, rec) {
    if (err) {
      return next(err);
    }
    res.json(rec);
  });
});

/* GET reacties van bericht */
router.get('/API/reacties', function(req, res, next) {
  Reactie.find(function(err, reacties) {
    if (err) {
      return next(err);
    }
    res.json(reacties);
  });
});

/* POST reactie op bericht */
router.post('/API/reacties', function(req, res, next) {
  let reactie = new Reactie(req.body);
  reactie.save(function(err, rec) {
    if (err) { return next(err); }
    res.json(rec);
  });
});

/* RESET DATABASE */
router.post('/API/reset_db', (req, res, next) => {
  Bericht.find({}, (err, berichten) => {
    berichten.forEach(bericht => bericht.remove());
  });
  Reactie.find({}, (err, reacties) => {
    reacties.forEach(reactie => reactie.remove())
  });
  /* User.find({}, (err, users) => {
      users.forEach(user=> user.remove());
  }); */
  res.status(204).end();
});

module.exports = router;
