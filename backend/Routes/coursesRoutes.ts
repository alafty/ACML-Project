//USE THIS TEMPLATE WHEN MAKING A ROUTES FILE

const {getCourses, searchCourses, addCourse} = require('../controllers/coursesController')

module.exports = function(app: any) {
    app.get('/courses', getCourses);
    app.get('/courses/search', searchCourses);
    app.post('/courses', addCourse);
};