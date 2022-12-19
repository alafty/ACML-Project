import { Request, Response } from "express";
import Course from "../Models/course";
import courseInputValidate from "../Validators/courseValidator";

// @desc    Get All Courses
// @rout    GET /courses/
// @access  private
const getCourses = async (req: Request, res: Response) => {
  const result = await Course.find();
  console.log(result);
  res.send(result);
};

const hoverCourse = async (req: Request, res: Response) => {
  if (courseInputValidate({ id: true }, req)) {
    const result = await Course.findById(req.body.id, {
      Subtitle: 1,
      Name: 1,
      Subject: 1,
      Exercises: 1,
      TotalHours: 1,
      Price: 1,
      Discount: 1,
    });

    res.status(200).json(result);
  }
};

// @desc    Search Courses By Subject
// @rout    POST /courses/search/:subje
// @access  public
const searchCourses = (req: Request, res: Response) => {
  Course.find({$or: [{Subject: req.body.searchTerm}, {Instructor: req.body.searchTerm}, {Name: req.body.searchTerm}]} , function(err: any, data: any) {
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
const addCourse = async (req: Request, res: Response) => {
  const inputValid = courseInputValidate(
    {
      id: false,
      Name: true,
      Subject: true,
      Subtitle: true,
      Exercises: true,
      Instructor: true,
      Price: true,
      TotalHours: true,
      RatingAvg: true,
      RatingCount: true,
    },
    req
  );
  if (!inputValid) {
    res.status(400).json({message: 'Make sure all fields are here'});
  } else {
    const newCourse = await Course.create(req.body);
    res.status(200).json(newCourse);
  }
};

// @desc    Remove a Course
// @rout    POST /courses/:id
// @access  private
const deleteCourse = (req: Request, res: Response) => {
  if(!req.body){
      res.status(400);
  }  else {
      Course.findByIdAndDelete(req.params.id)
  }
}

  const addRating = async (req: Request, res: Response) => { 
    if(!req.body){
      res.status(400);
    }
    else {
      var mult =0;
      const user_id= req.body.id;
      const ratingResult = await Course.findById(user_id);
      if(ratingResult!= null)
      {
      mult = ratingResult.RatingCount * ratingResult.RatingAvg;
      ratingResult.RatingAvg = (( mult + parseFloat(req.body.rate)) / (ratingResult.RatingCount+1));
      ratingResult.RatingCount ++;
      await Course.findByIdAndUpdate(user_id, {RatingAvg: ratingResult.RatingAvg});
      await Course.findByIdAndUpdate(user_id, {RatingCount: ratingResult.RatingCount});

      }
       res.status(200).json({message: 'rating added'})
      }
  }

  

export { getCourses, searchCourses, addCourse, hoverCourse, deleteCourse, addRating};
