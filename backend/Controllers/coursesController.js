const Course = require("../Models/course");

// @desc    Get All Courses
// @rout    GET /courses/
// @access  private
const getCourses = async (req, res) => {
  const result = await Course.find({}, { Name: 1, Rating: 1 });
  console.log(result);
  res.send(result);
};

// @desc    Search Courses
// @rout    GET /courses/search
// @access  private
const searchCourses = (req, res) => {
  console.log(req.body.perm);
  Course.find({ Name: req.body.perm }, { Name: 1 }, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
};

// @desc    Add a New Course
// @rout    POST /courses
// @access  private
const addCourse = (req, res) => {
  if (!req.body) {
    res.status(400);
  } else {
    const newCourse = Course.create(req.body);
    res.status(200).json(newCourse);
  }
};

module.exports = {
  getCourses,
  searchCourses,
  addCourse,
};
