//handles collection logic to MongoDB database

const mongoose = require('mongoose');

//we are setting the usage of the global javascript promise:
mongoose.Promise = global.Promise;

//port 27017 is the default port for mongodb + '/name of our database(TaskManager):
mongoose.connect('mongodb://localhost:27017/MedTracker', { useNewUrlParser: true }).then(() => {
    console.log("Connected to MongoDB successfully :)");
}).catch((err) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(err);
});

// To prevent deprectation warnings (from MongoDB native driver)
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
// mongoose.set('useUnifiedTopology', false);


module.exports = {
    mongoose
};