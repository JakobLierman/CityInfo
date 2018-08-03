var mongoose = require('mongoose');

let BerichtSchema = new mongoose.Schema({
  titel: String,
  boodschap: String,
  categorie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categorie'
  },
  user: String, // Should be user
  dateAdded: { type: Date, default: Date.now },
  reacties: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Reactie'
    }
  ]
});
mongoose.model('Bericht', BerichtSchema);