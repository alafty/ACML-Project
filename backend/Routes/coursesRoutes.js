//USE THIS TEMPLATE WHEN MAKING A ROUTES FILE

const {getCourses, searchCourses, addCourse, deleteCourse} = require('../controllers/coursesController')

module.exports = function(app) {
    app.get('/courses', getCourses);
    app.post('/courses/search', searchCourses);
    app.post('/courses', addCourse);
    app.delete('/courses/:id', deleteCourse);
};