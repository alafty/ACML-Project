//USE THIS TEMPLATE WHEN MAKING A ROUTES FILE

const {
  getCourses,
  searchCourses,
  addCourse,
} = require("../Controllers/coursesController");

module.exports = function (app) {
  app.get("/courses", getCourses);
  app.get("/courses/search", searchCourses);
  app.post("/courses", addCourse);
};
