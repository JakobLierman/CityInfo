let mongoose = require('mongoose');

let ReactieSchema = new mongoose.Schema({
  boodschap: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  created: {type: Date, default: Date.now}
});

ReactieSchema.pre('remove', function (next) {
  this.model('Reactie').update(
    {},
    {$pull: {reacties: this._id}},
    {safe: true, multi: true},
    next
  );
});

mongoose.model('Reactie', ReactieSchema);
