import { Request, Response, NextFunction } from "express";
import request from "../Models/request";

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
  
  


export { createRequest, fetchRequests };
