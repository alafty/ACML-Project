import { Request, Response, NextFunction } from 'express';
import course from '../Models/course';

// @desc    Get All Courses
// @rout    GET /courses/
// @access  private
const getCourses = (req: Request, res: Response) => {
    course.find({}, 'Name Rating TotalHours', function(err: any, data: any) {
        if(err){
            console.log(err);
        }
        else if(data.length==0)
        {
            res.send('There are currently no courses');
        }
        else{
            res.send(data);
        }
    });  
}

// @desc    Search Courses
// @rout    GET /courses/search
// @access  private
const searchCourses = (req: Request, res: Response) => {
    console.log(req.body.perm)
    course.find({Subject: req.body.perm} , 'Name', function(err: any, data:any) {
        if(err){
            res.send('Could not find the course');
        }
        else{
            res.send(data);
        }
    });
}

// @desc    Add a New Course
// @rout    POST /courses
// @access  private
const addCourse = (req:Request, res:Response) => {
    if(!req.body){
        res.status(400);
    }  else {
        const newCourse =  course.create(req.body)
        res.status(200).json(newCourse);
    }
}


module.exports = {
    getCourses, searchCourses, addCourse
}