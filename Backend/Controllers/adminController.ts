import { Request, Response } from "express";
import admin from "../Models/admin";
import instructor from "../Models/instructor";
import cTrainee from "../Models/corporateTrainee";
import iTrainee from '../Models/individualTrainee';
import corporate from '../Models/corporate';
import Package from "../Models/package";


const createAdmin = async (req: Request, res: Response) => {
  const existUsername = await admin.findOne({ Username: req.body.Username });
  if (existUsername) {
    console.log("username taken");
  } else {
    admin.create(req.body);
    res.status(200).json({ message: "admin created" });
  }
};

const createCorporate = async (req: Request, res: Response) => {
  const existUsername = await admin.findOne({ Username: req.body.Username });
  if (existUsername) {
    console.log("username taken");
  } else {
    corporate.create(req.body);
    res.status(200).json({ message: "corporate created" });
  }
};

const createInstructor = async (req: Request, res: Response) => {
  const existUsername = await instructor.findOne({
    Username: req.body.Username,
  });
  if (existUsername) {
    console.log("username taken");
  } else {
    instructor.create(req.body);
    res.status(200).json({ message: "instructor created" });
  }
};

// const createCTrainee = async (req: Request, res: Response) => {
//   const existUsername = await cTrainee.findOne({ Username: req.body.Username });
//   if (existUsername) {
//     console.log("username taken");
//   } else {
//     cTrainee.create(req.body);
//     res.json({ message: "corporate trainee created" });
//   }
// };

const createITrainee = async (req: Request, res: Response) => {
  const existUsername = await iTrainee.findOne({ Username: req.body.Username });
  if (existUsername) {
    console.log("username taken");
  } else {
    iTrainee.create(req.body);
    res.json({ message: "individual trainee created" });
  }
};

const login = async (req: Request, res: Response) => {
  let existUsername = await iTrainee.findOne({ Username: req.body.Username });
  let type = 'individualTrainee';
  if (!existUsername) {
    existUsername = await cTrainee.findOne({ Username: req.body.Username });
    type = 'corporateTrainee';
    if (!existUsername) {
      existUsername = await instructor.findOne({ Username: req.body.Username });
      type = 'instructor';
    }
  }
  if (existUsername) {
    if (existUsername.Password == req.body.Password) {
      const cookie = req.cookies.userData;
      cookie.id = existUsername.id;
      cookie.type = type;
      res.cookie("userData", cookie).status(200).json({user: existUsername, type: type});
    } else {
      res.json({ message: "incorrect password" });
    }
  } else {
    res.json({ message: "oops! this username does not exist" });
  }
};

const editInstructorDetails = async (req: Request, res: Response) => {
  
  if(req.body.email){
    await instructor.findOneAndUpdate({ Username: req.body.username }, {Email: req.body.email});
  }
  if(req.body.bio){
    await instructor.findOneAndUpdate({ Username: req.body.username }, {ShortBio: req.body.bio});
  }
  
  res.status(200).json('changes done');

}

export { createAdmin, createCorporate, createInstructor, createITrainee, login, editInstructorDetails };
