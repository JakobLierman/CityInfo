var mongoose = require('mongoose');

var BerichtSchema = new mongoose.Schema({
    titel: String,
    bericht: String,
    categorie: String,
    dateAdded: Date,
});
mongoose.model('Bericht', BerichtSchema);