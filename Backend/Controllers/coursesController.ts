import { Request, Response } from "express";
import Course from "../Models/course";
import courseInputValidate from "../Validators/courseValidator";
import Subtitle from "../Models/subtitle";

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
      Subtitles: 1,
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
  Course.find(
    {
      $or: [
        { Subject: req.body.searchTerm },
        { Instructor: req.body.searchTerm },
        { Name: req.body.searchTerm },
      ],
    },
    function (err: any, data: any) {
      if (err) {
        console.log(err);
      } else {
        res.send(data);
      }
    }
  );
};

// @desc    Add a New Course
// @rout    POST /courses
// @access  private
const addCourse = async (req: Request, res: Response) => {
  const inputValid = courseInputValidate(
    {
      id: false,
      Name: true,
      Subject: true,
      Subtitles: true,
      Instructor: true,
      Price: true,
      TotalHours: true,
      RatingAvg: true,
      RatingCount: true,
    },
    req
  );
  if (!inputValid) {
    res.status(400).json({ message: "Make sure all fields are here" });
  } else {
    const newCourse = await Course.create(req.body);
    res.status(200).json(newCourse);
  }
};

// @desc    Remove a Course
// @rout    POST /courses/:id
// @access  private
const deleteCourse = (req: Request, res: Response) => {
  if (!req.body) {
    res.status(400);
  } else {
    Course.findByIdAndDelete(req.params.id);
  }
};


  const addRating = async (req: Request, res: Response) => { 
    if(!req.body.id || !req.body.rating){
      res.status(400);
    }
    else {
      var mult =0;
      const courseID= req.body.id;
      const ratingResult = await Course.findById(courseID);
      console.log("we reached here");
      
      if(ratingResult!= null)
      {
      mult = ratingResult.RatingCount * ratingResult.RatingAvg;
      ratingResult.RatingAvg = (( mult + parseFloat(req.body.rating)) / (ratingResult.RatingCount+1));
      ratingResult.RatingCount ++;
      await Course.findByIdAndUpdate(courseID, {RatingAvg: ratingResult.RatingAvg});
      await Course.findByIdAndUpdate(courseID, {RatingCount: ratingResult.RatingCount});
      
      res.status(200).json({message: 'rating added'});
      }else{
        res.status(404).json({message: 'no such course exists'});
      }
      }
  

  


// @desc    Add a Course Subtitle or Modify one
// @rout    Put /course-subtitle
// @access  private
/// @body    {id, {[id], VideoLink, Description}}

const putCourseSubtitle = async (req: Request, res: Response) => {
  if (courseInputValidate({ id: true }, req)) {
    var course = await Course.findById(req.body.id);
    var sub = req.body.Subtitle;
    if (!sub) {
      res
        .status(400)
        .json({
          message:
            'Subtitle not found in request. Make sure body has "Subtitle" key',
        });
    }
    if (course) {
      if (sub.Id) {
        var subToModify = course.Subtitles.id(sub.Id);
        if (subToModify) {
          var tempSub = {
            Description: subToModify.Description,
            ...(subToModify.VideoId ? {VideoId: subToModify.VideoId}: {}),
          };
          if (sub.Description) {
            tempSub.Description = sub.Description;
          }
          if (sub.VideoId) {
            tempSub.VideoId = sub.VideoId;
          }
          console.log(tempSub);
          console.log(subToModify);
          
          var newSub = subToModify.set(tempSub);
          course.save(function (err) {
            if (err) res.status(400).json({message: err})
            res.status(200).json(newSub);
          });
        } else {
          res.status(400).json("Subtitle not found. Make sure the id is valid");
        }
      } else {
        var newSub = course.Subtitles.create({
          VideoId: sub.VideoId,
          Description: sub.Description,
        });
        course.Subtitles.push(newSub);
        course.save(function (err) {
          if (err) res.status(400).json({message: err})
          res.status(200).json(newSub);
        });        
      }
    } else {
      res
        .status(400)
        .json({ message: "Course not found. Make sure course id is valid" });
    }
  } else {
    res.status(400).json({ message: "Need to specify id for course" });
  }
};

}

export {getCourses, addRating, hoverCourse, deleteCourse, searchCourses, addCourse};