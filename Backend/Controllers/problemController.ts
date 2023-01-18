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
    const senderID =   req.user._id;
    const problems = await problem.find({Sender: senderID});
    const modifiedProblems = [];
    for (var key in problems) {
      let p = problems[key] as any;
      const Course = await course.find({_id:p.Course.toString()});
      modifiedProblems[key] = {...(p._doc), CourseName: Course[0].Name};
    }    

    try {
        res.send(modifiedProblems);
      } catch (error) {
        res.status(500).send(error);
      }
    }
  export {
    createProblem,
    getMyProblems

  }