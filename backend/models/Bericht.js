let mongoose = require('mongoose');

let BerichtSchema = new mongoose.Schema({
  titel: String,
  boodschap: String,
  categorie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categorie'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  dateAdded: { type: Date, default: Date.now },
  reacties: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Reactie'
    }
  ]
});

mongoose.model('Bericht', BerichtSchema);
