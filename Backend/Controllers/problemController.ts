import { Request, Response } from "express";
import problem from "../Models/problem";
import course from "../Models/course";



const createProblem = async (req: Request, res: Response) => {

    problem.create(req.body);
    res.status(200).json({ message: 'user created' });
   
  };


  const getMyProblems= async (req: Request, res: Response) => {
    //used Acml as test name, replace to get the required name from the user
    // Courses should have attribute subject in them 
    const senderID =   req.body.Sender
    const problems = await problem.find({Sender: senderID});
    const Course = await course.find({_id:req.body.Course});
    console.log(Course);
    try {
        res.send(problems);
      } catch (error) {
        res.status(500).send(error);
      }
    }
  export {
    createProblem,
    getMyProblems

  }