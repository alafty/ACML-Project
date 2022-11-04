const { createAdmin, createInstructor, createCtrainee} = require('../controllers/adminController')

module.exports = function(app) {
    app.post('/createAdmin', createAdmin);
    app.post('/createInstructor', createInstructor);
    app.post('/createCorporateTrainee', createCtrainee);
};