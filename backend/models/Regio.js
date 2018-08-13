let mongoose = require('mongoose');

let RegioSchema = new mongoose.Schema({
  naam: String
});

mongoose.model('Regio', RegioSchema);
