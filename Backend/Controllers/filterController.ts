import { Request, Response } from "express";
import coursesModel from "../Models/course";

const getBySubject= async (req: Request, res: Response) => {
    //used Acml as test name, replace to get the required name from the user
    // Courses should have attribute subject in them 
    var factor = req.body.Subject
    const courses = await coursesModel.find({Subject: factor});
    try {
        res.send(courses);
      } catch (error) {
        res.status(500).send(error);
      }
    // filter specific subjects
}
const getBySubjectInstructor= async (req: Request, res: Response) => {
  //used Acml as test name, replace to get the required name from the user
  // Courses should have attribute subject in them 
  var subjet = req.body.Subject
  var instructor = req.body.Instructor

  const courses = await coursesModel.find({Subject: subjet},{Instructor:instructor});
  try {
      res.send(courses);
    } catch (error) {
      res.status(500).send(error);
    }
  // filter specific subjects
}


const getByRating = async (req: Request, res: Response) => {
    //used 3 as test rating, replace to get the required name from the user
    var factor = req.body.Rating
    const courses = await coursesModel.find({ Rating: { $gte: factor } });
    try {
        res.send(courses);
      } catch (error) {
        res.status(500).send(error);
      }
    // filter the ratings under a specific number
}

const getByPrice = async (req: Request, res: Response) => {
   //used 0,1000 as test prices, replace to get the required name from the user
   var factorSmaller  = req.body.PriceLow;
   var factorGreater = req.body.PriceHigh;
   const courses = await coursesModel.find({
    Price: { $lt: factorGreater,$gt: factorSmaller }
  });
   try {
       res.send(courses);
     } catch (error) {
       res.status(500).send(error);
     }
    // filter in price range
}


const getByPriceInstructor = async (req: Request, res: Response) => {
  //used 0,1000 as test prices, replace to get the required name from the user
  var factorSmaller  = req.body.PriceLow;
  var factorGreater = req.body.PriceHigh;
  var instructor = req.body.Instructor
  const courses = await coursesModel.find({
   Price: { $gt: factorGreater,$lt: factorSmaller }},{Instructor:instructor});
  try {
      res.send(courses);
    } catch (error) {
      res.status(500).send(error);
    }
   // filter in price range
}

export {
    getBySubject,getBySubjectInstructor, getByRating, getByPrice,getByPriceInstructor};