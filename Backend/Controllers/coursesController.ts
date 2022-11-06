import { Request, Response } from "express";
import Course from "../Models/course";

// @desc    Get All Courses
// @rout    GET /courses/
// @access  private
const getCourses = async (req: Request, res: Response) => {
  const result = await Course.find({}, { Name: 1, Rating: 1 });
  console.log(result);
  res.send(result);
};

// @desc    Search Courses
// @rout    GET /courses/search
// @access  private
const searchCourses = (req: Request, res: Response) => {
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
const addCourse = (req: Request, res: Response) => {
  if (!req.body) {
    res.status(400);
  } else {
    const newCourse = Course.create(req.body);
    res.status(200).json(newCourse);
  }
};

export { getCourses, searchCourses, addCourse };
