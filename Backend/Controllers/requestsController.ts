import { Request, Response, NextFunction } from "express";
import request from "../Models/request";
import corpTrainee from "../Models/corporateTrainee";
import course from "../Models/course";

const createRequest = async (req: Request, res: Response) => {

  if (!req.body.courseID || !req.body.traineeID || !req.body.corporateID) {
   res.status(400).json({message: "please complete all required fields"});
  }
  
  try {
    const newRequest = await request.create({TraineeID: req.body.traineeID, CourseID: req.body.courseID, CorporateID: req.body.corporateID});
    if(newRequest){
        res.status(200).json(newRequest);
      }
} catch (error) {
    res.status(400).json({message: "Validation Error"});
};
  }

  const fetchRequests = async (req: Request, res: Response) => {

    if (!req.body.corporateID) {
     res.status(400).json({message: "please complete all required fields"});
    }
    
    try {
      const fetchedRequsts = await request.find({CorporateID: req.body.corporateID});
      if(fetchedRequsts){
          res.status(200).json(fetchedRequsts);
        }
  } catch (error) {
      res.status(400).json({message: "Validation Error"});
  };
    }
  const acceptRequests = async (req, res) => {
    var trainee = await corpTrainee.findOne({_id : req.body.TraineeID});
    var theCourse = await course.findOne({_id : req.body.CourseID});
    const newCourse = {
    courseID : req.body.CourseID,
    progress : 0
  }
    trainee.PurchasedCourses.push(newCourse);
    trainee.save();
    theCourse.PurchaseCount++;
    theCourse.save();
    await request.findOneAndDelete(req.body);
    res.status(200).json('request accepted');
    console.log(trainee);
    console.log(theCourse);
  }
  

  const rejectRequests = async (req, res) => {
    await request.findOneAndDelete(req.body);
    res.status(200).json('request rejected');
 
  }


export { createRequest, fetchRequests,acceptRequests,rejectRequests };
