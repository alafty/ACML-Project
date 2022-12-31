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
        var coursesRatings: any[] = [];
        if(viewInstructor!=null)
        {      
            for(let i = 0 ; i< viewInstructor.Courses.length; i++)
            {
                var ratingResultofCourse = await course.findById(viewInstructor.Courses[i]);
                if(ratingResultofCourse){
                  var name = ratingResultofCourse.Name;
                  coursesRatings.push({ [name]: ratingResultofCourse.RatingAvg});
                }
                
            }
            }
        res.status(200).json({coursesRatings})
      }
  }

  const addRating = async (req: Request, res: Response) => { 
    if(!req.body.id || !req.body.rating){
      res.status(400);
    }
    else {
      var mult =0;
      const instructorID= req.body.id;
      const ratingResult = await instructor.findById(instructorID);

      if(ratingResult!= null)
      {
      mult = ratingResult.RatingCount * ratingResult.RatingAvg;
      ratingResult.RatingAvg = (( mult + parseFloat(req.body.rating)) / (ratingResult.RatingCount+1));
      ratingResult.RatingCount ++;
      await instructor.findByIdAndUpdate(instructorID, {RatingAvg: ratingResult.RatingAvg});
      await instructor.findByIdAndUpdate(instructorID, {RatingCount: ratingResult.RatingCount});

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
        if(viewInstructor){
          res.status(200).json({rating: viewInstructor.RatingAvg})
        } else {
          res.status(400).json({message: "no instructor found"});
        }
        
      }
  }

  const editInstructorDetails = async (req: Request, res: Response) => {
    if (req.body.email) {
      await instructor.findOneAndUpdate(
        { Username: req.body.username },
        { Email: req.body.email }
      );
    }
    if (req.body.bio) {
      await instructor.findOneAndUpdate(
        { Username: req.body.username },
        { ShortBio: req.body.bio }
      );
    }
  
    res.status(200).json("changes done");
  };

  export {addRating , viewCourseRatings , viewInstructorRatings, editInstructorDetails};
