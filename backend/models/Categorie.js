let mongoose = require('mongoose');

let CategorieSchema = new mongoose.Schema({
    naam: String,
    graad: { type: Number, default: 0 }
});

mongoose.model('Categorie', CategorieSchema);