const Course = require("../Models/course");


// @desc    Get All Courses
// @rout    GET /courses/
// @access  private
const getCourses = (req, res) => {
    Course.find('Name Rating TotalHours', function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });  
}

// @desc    Search Courses
// @rout    GET /courses/search
// @access  private
const searchCourses = (req, res) => {
    console.log(req.body.perm)
    Course.find({Subject: req.body.perm} , 'Name', function(err, data) {
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


module.exports = {
    getCourses, searchCourses, addCourse
}