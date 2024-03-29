import { Request, Response } from "express";
import userTypes from "../Constants/userTypes";
import course from "../Models/course";
import instructor from "../Models/instructor";

const viewCourseRatings = async (req: Request, res: Response) => {
  if (!req.body) {
    res.status(400);
  } else {
    const viewInstructor = await instructor.findById(req.body.id);
    var coursesRatings: any[] = [];
    if (viewInstructor != null) {
      for (let i = 0; i < viewInstructor.Courses.length; i++) {
        var ratingResultofCourse = await course.findById(
          viewInstructor.Courses[i]
        );
        if (ratingResultofCourse) {
          var name = ratingResultofCourse.Name;
          coursesRatings.push({ [name]: ratingResultofCourse.RatingAvg });
        }
      }
    }
    res.status(200).json({ coursesRatings });
  }
};

const addRating = async (req: Request, res: Response) => {
  if (!req.body.rating) {
    res.status(400).json({ message: "Make sure all fields are valid" });
  } else if (
    !(
      req.type == userTypes.corporateTrainee ||
      req.type == userTypes.individualTrainee
    )
  ) {
    res.status(401).json({ message: "Not authorized" });
  } else {
    var mult = 0;
    const instructorID = req.body.id;
    const ratingResult = await instructor.findById(instructorID);

    if (ratingResult != null) {
      mult = ratingResult.RatingCount * ratingResult.RatingAvg;
      ratingResult.RatingAvg =
        (mult + parseFloat(req.body.rating)) / (ratingResult.RatingCount + 1);
      ratingResult.RatingCount++;
      await instructor.findByIdAndUpdate(instructorID, {
        RatingAvg: ratingResult.RatingAvg,
      });
      await instructor.findByIdAndUpdate(instructorID, {
        RatingCount: ratingResult.RatingCount,
      });
    }
    res.status(200).json({ message: "rating added" });
  }
};

const viewInstructorRatings = async (req: Request, res: Response) => {
  if (!req.body) {
    res.status(400);
  } else {
    const viewInstructor = await instructor.findById(req.body.id);
    if (viewInstructor) {
      res.status(200).json({ rating: viewInstructor.RatingAvg });
    } else {
      res.status(400).json({ message: "no instructor found" });
    }
  }
};

const editInstructorDetails = async (req: Request, res: Response) => {
 // if (req.type != userTypes.instructor) {
   // res.status(401).json({ message: "Not authorized" });
   // return;
 // }
  var i = await instructor.findById(req.body._id);


  var i = await instructor.findOne({Email: req.body.Email});
  console.log(i);

  if(i){
   if(req.body.newEmail){
  //if (instructorInputValidate({ Email: true }, req)) {
    await instructor.updateOne({Email: req.body.Email}, {Email: req.body.newEmail });
    
  //}
  }
    if(req.body.bio){
    //if (instructorInputValidate({ ShortBio: true }, req)) {
      await instructor.updateOne({Email: req.body.Email},{ ShortBio: req.body.bio });
    //}
    }
    res.status(200).json({mesage: 'wslna'});
  } else {
    res.status(404).json({message: "no user found"});
  }
  // if (instructorInputValidate({ Username: true }, req)) {
  //   await i.updateOne({ Username: req.body.Username });
  // }

  i = await instructor.findById(req.body._id);

  res.status(200).json(i);

};
  const getInstructorData = async(req: Request, res: Response) => {
    if(!req.body.id){
      res.status(400).json({message: "please enter an instructor id"})
    } else {
      const instructorToGet = await instructor.findById(req.body.id);
      if (instructorToGet) {
        res.status(200).json(instructorToGet);
      } else {
        res.status(400).json({message: "please enter a valid id"});
      }
    }
  }

  export {addRating , viewCourseRatings , viewInstructorRatings, getInstructorData, editInstructorDetails};

