import { Request, Response } from "express";
import admin from "../Models/admin";
import instructor from "../Models/instructor";
import cTrainee from "../Models/corporateTrainee";
import iTrainee from '../Models/individualTrainee';

const createAdmin = async (req: Request, res: Response) => {
  const existUsername = await admin.findOne({ Username: req.body.Username });
  if (existUsername) {
    console.log("username taken");
  } else {
    admin.create(req.body);
    res.status(200).json({ message: "admin created" });
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

const createCTrainee = async (req: Request, res: Response) => {
  const existUsername = await cTrainee.findOne({ Username: req.body.Username });
  if (existUsername) {
    console.log("username taken");
  } else {
    cTrainee.create(req.body);
    res.json({ message: "corporate trainee created" });
  }
};

const createITrainee = async (req: Request, res: Response) => {
  const existUsername = await iTrainee.findOne({ Username: req.body.Username });
  if (existUsername) {
    console.log("username taken");
  } else {
    iTrainee.create(req.body);
    res.json({ message: "individual trainee created" });
  }
};

export { createAdmin, createInstructor, createCTrainee, createITrainee};
