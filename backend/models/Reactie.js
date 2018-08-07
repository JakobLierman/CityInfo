let mongoose = require('mongoose');

let ReactieSchema = new mongoose.Schema({
    bericht: String, // Should be bericht
    boodschap: String,
    user: String, // Should be user
    dateAdded: { type: Date, default: Date.now }
});

ReactieSchema.pre('remove', function(next) {
  this.model('Reactie').update(
    {},
    { $pull: { reacties: this._id } },
    { safe: true, multi: true },
    next
  );
});

mongoose.model('Reactie', ReactieSchema);
