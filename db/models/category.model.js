const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        //so that the white space on both ends of the string is trimmed:
        trim: true
    },
    // with auth
    _userId: {
        type: mongoose.Types.ObjectId,
        required: true
    }

    

})

//creating the model:
const Category = mongoose.model('Category', CategorySchema);

module.exports = { Category }