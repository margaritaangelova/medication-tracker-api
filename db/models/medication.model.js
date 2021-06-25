const mongoose = require('mongoose');

const MedicationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        //so that the white space on both ends of the string is trimmed:
        trim: true
    },
    //so that we will be able to tell which list this task belongs to:
    _categoryId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    timesADay: {
        type: Number,
        default: 1,
    },
    intakeHour: {
        type: Number,

    },
    intakeMinutes: {
        type: Number,

    },
    completed: {
        type: Boolean,
        default: false
    }
    

})

//creating the model:
const Medication = mongoose.model('Medication', MedicationSchema);

module.exports = { Medication }