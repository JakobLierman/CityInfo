let mongoose = require('mongoose');

let RegioSchema = new mongoose.Schema({
    naam: String,
    berichten: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bericht'
    }]
});

mongoose.model('Regio', RegioSchema);