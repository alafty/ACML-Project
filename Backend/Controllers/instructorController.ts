import { Request, Response } from "express";
import course from "../Models/course";
import instructor from "../Models/instructor";

const viewCourseRatings= async(req: Request, res: Response) => {
    if(!req.body){
        res.status(400);
      }
      else
      {
        const viewInstructor = await instructor.findById(req.body.id);
        if(viewInstructor!=null)
        {      
            for(let i = 0 ; i< viewInstructor.Courses.length; i++)
            {
                var ratingResultofCourse = await course.findById(viewInstructor.Courses[i]);
                console.log(ratingResultofCourse?.RatingAvg);
            }
            }
        res.status(200).json({message: 'rating printed'})
      }
  }

  const addRating = async (req: Request, res: Response) => { 
    if(!req.body){
      res.status(400);
    }
    else {
      var mult =0;
      const user_id= req.body.id;
      const ratingResult = await instructor.findById(user_id);
      if(ratingResult!= null)
      {
      mult = ratingResult.RatingCount * ratingResult.RatingAvg;
      ratingResult.RatingAvg = (( mult + parseFloat(req.body.rate)) / (ratingResult.RatingCount+1));
      ratingResult.RatingCount ++;
      await instructor.findByIdAndUpdate(user_id, {RatingAvg: ratingResult.RatingAvg});
      await instructor.findByIdAndUpdate(user_id, {RatingCount: ratingResult.RatingCount});

      }
       res.status(200).json({message: 'rating added'})
      }
  }

  const viewInstructorRatings= async(req: Request, res: Response) => {
    if(!req.body){
        res.status(400);
      }
      else
      {
        const viewInstructor = await instructor.findById(req.body.id);
        console.log(viewInstructor?.RatingAvg);
        res.status(200).json({message: 'rating printed'})
      }
  }

  export {addRating , viewCourseRatings , viewInstructorRatings};
