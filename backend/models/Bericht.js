var mongoose = require('mongoose');

var BerichtSchema = new mongoose.Schema({
    titel: String,
    boodschap: String,
    categorie: String,
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