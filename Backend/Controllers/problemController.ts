import { Request, Response } from "express";
import problem from "../Models/problem";
import course from "../Models/course";
import userTypes from "../Constants/userTypes";
import problemInputValidate from "../Validators/problemValidator";

const createProblem = async (req: Request, res: Response) => {
  if (
    req.type != userTypes.individualTrainee &&
    req.type != userTypes.corporateTrainee
  ) {
    res.status(410).json({ message: "Not authorized" });
    return;
  }
  if (
    !problemInputValidate(
      { id: false, Type: true, Description: true, Course: true },
      req
    )
  ) {
    res.status(500).json({ message: "Make sure body is valid" });
    return;
  }

  const userId = req.user.id;
  var data: typeof problem.schema.obj = { ...req.body, Sender: userId };
  var p = await problem.create(data);
  if (p) {
    res.status(200).json(p);
  } else {
    res
      .status(500)
      .json({ message: "An error occured while creating problem" });
  }
};

const getMyProblems = async (req: Request, res: Response) => {
  //used Acml as test name, replace to get the required name from the user
  // Courses should have attribute subject in them
  const senderID = req.user._id;
  const problems = await problem.find({ Sender: senderID });
  const modifiedProblems = [];
  for (var key in problems) {
    let p = problems[key] as any;
    const Course = await course.find({ _id: p.Course.toString() });
    modifiedProblems[key] = { ...p._doc, CourseName: Course[0].Name };
  }

  try {
    res.send(modifiedProblems);
  } catch (error) {
    res.status(500).send(error);
  }
};
export { createProblem, getMyProblems };
