//combines all models, so that it is easier to import them from other files

const { Category } = require('./category.model');
const { Medication } = require('./medication.model');
const { User } = require('./user.model');
const { History } = require('./history.model');

module.exports = {
    Category,
    Medication,
    User,
    History
}