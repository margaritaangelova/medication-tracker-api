const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const historySchema = new Schema({
    date: {
        type: String,
        required: true,
        minlength: 1,
        //so that the white space on both ends of the string is trimmed:
        trim: true
    },
    takenMedications: [{
        medicationName: String,
        intakeHour: Number,
        intakeMinutes: Number,
    }],
    // with auth
    _userId: {
        type: mongoose.Types.ObjectId,
        required: true
    }

});

const History = mongoose.model('History', historySchema);

module.exports = { History };