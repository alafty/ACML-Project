import { Request, Response } from "express";
import admin from "../Models/admin";
import instructor from "../Models/instructor";
import cTrainee from "../Models/corporateTrainee";
import iTrainee from "../Models/individualTrainee";
import corpTraineeInputValidate from "../Validators/corporateTraineeValidator";
import indivTraineeInputValidate from "../Validators/individualTraineeValidator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import adminInputValidate from "../Validators/adminValidator";
import instructorInputValidate from "../Validators/instructorValidator";
import corporate from "../Models/corporate";
import corpTrainee from "../Models/corporateTrainee";
import inidvTrainee from "../Models/individualTrainee";
import userTypes from "../Constants/userTypes";
import problem from "../Models/problem";

const createAdmin = async (req: Request, res: Response) => {
  if (
    adminInputValidate(
      { id: false, Username: true, Email: true, Password: true },
      req
    )
  ) {
    const {user: existUser, type: _} = await findUserType('Email', req.body.Email);
    if (existUser) {
      res.status(400).json({ message: "Email already exists" });
      return;
    }

   /* if (!protectAdminCreation(req)) {
      res.status(401).json({ message: "Not authorized" });
      return;
    }*/

    var newBody = req.body;

    // Hash Password
    var salt = await bcrypt.genSalt();
    var hashedPass = await bcrypt.hash(newBody.Password, salt);
    newBody.Password = hashedPass;

    // Create
    var a = await admin.create(newBody);
    if (a) {
      res
        .status(200)
        .json({ ...a.toJSON(), token: generateToken(a.id, userTypes.admin) });
    } else {
      res.status(500).json({ message: "An error occured. Try again" });
    }
  } else {
    res.status(400).json({ message: "Make sure fields are valid" });
  }
};

const protectAdminCreation = (req: Request): boolean => {
  return req.type == userTypes.admin;
};

const createInstructor = async (req: Request, res: Response) => {
  if (
    instructorInputValidate(
      {
        id: false,
        Username: true,
        Email: true,
        Password: true,
        ShortBio: true,
      },
      req
    )
  ) {
    const {user: existUser, type: _} = await findUserType('Email', req.body.Email);
    if (existUser) {
      res.status(400).json({ message: "Email already exists" });
      return;
    }
    var newBody = req.body;

    // Hash Password
    var salt = await bcrypt.genSalt();
    var hashedPass = await bcrypt.hash(newBody.Password, salt);
    newBody.Password = hashedPass;

    // Create
    var i = await instructor.create(newBody);
    if (i) {
      res
        .status(200)
        .json({ ...i.toJSON(), token: generateToken(i.id, userTypes.instructor) });
    } else {
      res.status(500).json({ message: "An error occured. Try again" });
    }
  } else {
    res.status(400).json({ message: "Make sure fields are valid" });
  }
};

const createCTrainee = async (req: Request, res: Response) => {
  if (
    corpTraineeInputValidate(
      { id: false, Username: true, Email: true, Password: true, Corporate: true },
      req
    )
  ) {
    const {user: existUser, type: _} = await findUserType('Email', req.body.Email);
    if (existUser) {
      res.status(400).json({ message: "Email already exists" });
      return;
    }



    var newBody = req.body;

    // Hash Password
    var salt = await bcrypt.genSalt();
    var hashedPass = await bcrypt.hash(newBody.Password, salt);
    newBody.Password = hashedPass;
    // Create
    var c = await cTrainee.create(newBody);
    if (c) {
      res
        .status(200)
        .json({ ...c.toJSON(), token: generateToken(c.id, userTypes.corporateTrainee) });
    } else {
      res.status(500).json({ message: "An error occured. Try again" });
    }
  } else {
    res.status(400).json({ message: "Make sure fields are valid" });
  }
};

const createITrainee = async (req: Request, res: Response) => {
  if (
    indivTraineeInputValidate(
      { id: false, Username: true, Email: true, Password: true },
      req
    )
  ) {
    const {user: existUser, type: _} = await findUserType('Email', req.body.Email);
    if (existUser) {
      res.status(400).json({ message: "Email already exists" });
      return;
    }
    var newBody = req.body;

    // Hash Password
    var salt = await bcrypt.genSalt();
    var hashedPass = await bcrypt.hash(newBody.Password, salt);
    newBody.Password = hashedPass;

    // Create
    var t = await iTrainee.create(newBody);
    if (t) {
      res
        .status(200)
        .json({ ...t.toJSON(), token: generateToken(t.id, userTypes.individualTrainee) });
    } else {
      res.status(500).json({ message: "An error occured. Try again" });
    }
  } else {
    res.status(400).json({ message: "Make sure fields are valid" });
  }
};

const findUserType = async (key: string, value: string) => {
  let user = await iTrainee.findOne({ [key]: value });
  let type: string | null = userTypes.individualTrainee;
  if (!user) {
    user = await cTrainee.findOne({ [key]: value });
    type = userTypes.corporateTrainee;
    if (!user) {
      user = await instructor.findOne({ [key]: value });
      type = userTypes.instructor;
      if (!user) {
        user = await admin.findOne({ [key]: value });
        type = userTypes.admin;
        if (!user) {
          user = await corporate.findOne({ [key]: value });
          type = userTypes.corporate;
          if (!user) {
            user = null;
            type = null;
          }
        }
      }
    }
  }

  return { user, type };
};

const login = async (req: Request, res: Response) => {
  if (adminInputValidate({ Email: true, Password: true }, req)) {
    var { user, type } = await findUserType("Email", req.body.Email);

    if (user) {
      if (await bcrypt.compare(req.body.Password, user.Password)) {

        res
          .status(200)
          .json({
            ...user.toJSON(),
            type: type,
            token: generateToken(user.id, type!),
          });
      } else {
        res.status(401).json({ message: "incorrect password" });
      }
    } else {
      res.status(400).json({ message: "oops! this user does not exist" });
    }
  } else {
    res.status(400).json({ message: "Make sure all fields are valid" });
  }
};

const me = async (req: Request, res: Response) => {
  let user: any;
  var id = req.user._id;
  switch (req.type) {
    case userTypes.admin:
      user = await admin.findOne(id);
      break;

    case userTypes.corporate:
      user = await corporate.findOne(id);
      break;

    case userTypes.corporateTrainee:
      user = await corpTrainee.findOne(id);
      break;

    case userTypes.individualTrainee:
      user = await inidvTrainee.findOne(id);
      break;

    case userTypes.instructor:
      user = await instructor.findOne(id);
      break;
  }

  res.status(200).json({...user, type: req.type});
};

const generateToken = (id: string, type: string) => {
  return jwt.sign({ id, type }, process.env.JWT_SECRET!, {
    expiresIn: "30d",
  });
};

const getProblems = async (req, res) => {
  const problems= await problem.find({});
  res.status(200).json(problems);
     }
     
 const resolveProblems = async (req, res) => {
  const filter = req.body
  const update = { Status: 'Resolved' };  
  await problem.findOneAndUpdate(filter, update);
  res.status(200).json("Problem Resolved");
    }
    const holdProblems = async (req, res) => {
      const filter = { Type: 'Other' }
      const update = { Status: 'Pending' };  
      await problem.findOneAndUpdate(filter, update);
      res.status(200).json("Problem Pending");
        }
      
  
 ;
export {
  createAdmin,
  createInstructor,
  createCTrainee,
  createITrainee,
  login,
  me,
  findUserType,
  getProblems,
  resolveProblems,
  holdProblems
};
