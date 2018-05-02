var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let Bericht = mongoose.model('Bericht');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('server works');
});

router.get('/API/berichten/', function(req, res, next) {
  Bericht.find(function(err, berichten){
    if (err) { return next(err); }
    res.json(berichten);
  });
});

router.post('/API/berichten/', function (req, res, next) {
  let bericht = new Bericht(req.body);
  bericht.save(function(err, rec) {
    if (err){ return next(err); }
    res.json(rec);
  });
});

module.exports = router;
