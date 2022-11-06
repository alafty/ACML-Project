const Course = require("../Models/course");


// @desc    Get All Courses
// @rout    GET /courses/
// @access  public
const getCourses = (req, res) => {
    Course.find({},'Subject', function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });  
}

// @desc    Search Courses By Subject
// @rout    POST /courses/search/:subje
// @access  public
const searchCourses = (req, res) => {
    Course.find({$or: [{Subject: req.body.searchTerm}, {Instructor: req.body.searchTerm}, {Name: req.body.searchTerm}]} , function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });
}

// @desc    Add a New Course
// @rout    POST /courses
// @access  private
const addCourse = (req, res) => {
    if(!req.body){
        res.status(400);
    }  else {
        const newCourse =  Course.create(req.body)
        res.status(200).json(newCourse);
    }
}

// @desc    Remove a Course
// @rout    POST /courses/:id
// @access  private
const deleteCourse = (req, res) => {
    if(!req.body){
        res.status(400);
    }  else {
        Course.findByIdAndDelete(req.params.id)
    }
}


module.exports = {
    getCourses, searchCourses, addCourse, deleteCourse
}