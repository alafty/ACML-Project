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
import corporateInputValidate from "../Validators/corporateValidator";

const createAdmin = async (req: Request, res: Response) => {
  try {
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
  }}catch (e) {
    console.log(e)
  }
};

const protectAdminCreation = (req: Request): boolean => {
  return req.type == userTypes.admin;
};

const createCorporate = async (req: Request, res: Response) => {
  if (
    corporateInputValidate(
      {
        id: false,
        Industry: true,
        Username: true,
        Email: true,
        Password: true,
        Package: false
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
    var i = await corporate.create(newBody);
    if (i) {
      res
        .status(200)
        .json({ ...i.toJSON(), token: generateToken(i.id, userTypes.corporate) });
    } else {
      res.status(500).json({ message: "An error occured. Try again" });
    }
  } else {
    res.status(400).json({ message: "Make sure fields are valid" });
  }
};

const createInstructor = async (req: Request, res: Response) => {
  try {
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
  }}
  catch (e) {
    console.log(e)
  }
};
const getInstructors = async (req, res) => {
  const instructors= await instructor.find({});
  res.status(200).json(instructors);
     }
const getAdmins = async (req, res) => {
      const admins= await admin.find({});
      res.status(200).json(admins);
         }
const getCTrainees = async (req, res) => {
          const cTrainees= await cTrainee.find({});
          res.status(200).json(cTrainees);
             }
const getITrainees = async (req, res) => {
              const iTrainees= await iTrainee.find({});
              res.status(200).json(iTrainees);
                 }
const getCorps = async (req, res) => {
                  const corps= await corporate.find({});
                  res.status(200).json(corps);
                     }
const deleteInstructor = async (req,res) => {
     const filter = req.body 
     console.log("hii")
     console.log(req.body)
     await instructor.findOneAndDelete(req.body)
     res.status(200).json('Instructor Deleted');
      }

      const deleteCorptrainee = async (req,res) => {
        const filter = req.body 
        console.log("hii")
        console.log(req.body)
        await cTrainee.findOneAndDelete(req.body)
        res.status(200).json('Corporate trainee Deleted');
         }
         const deleteIndivtrainee = async (req,res) => {
          const filter = req.body 
          console.log("hii")
          console.log(req.body)
          await iTrainee.findOneAndDelete(req.body)
          res.status(200).json('individual trainee Deleted');
           }
          
           const deleteCorp = async (req,res) => {
            const filter = req.body 
            console.log("hii")
            console.log(req.body)
            await corporate.findOneAndDelete(req.body)
            res.status(200).json('Corporate Deleted');
             }
            



 /* const updateInstructor = async (req, res) => {
        const filter = req.body 
        await problem.findOneAndUpdate(filter, req.body);
        res.status(200).json('Instructor Updated');
          }*/
          const updateInstructor = async (req, res) => {
            var newBody = req.body;

    // Hash Password
    var salt = await bcrypt.genSalt();
    var hashedPass = await bcrypt.hash(newBody.Password, salt);
    newBody.Password = hashedPass;
      //const {Username} = req.body
      await instructor.updateOne({_id : req.body._id}, newBody);
      res.status(200).json("Updated A User!");
              }


const createCTrainee = async (req: Request, res: Response) => {
  try {
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
  }}catch (e) {
    console.log(e)
  }
};
const createCorp = async (req: Request, res: Response) => {
  try {
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
    var t = await corporate.create(newBody);
    if (t) {
      res
        .status(200)
        .json({ ...t.toJSON(), token: generateToken(t.id, userTypes.corporate) });
    } else {
      res.status(500).json({ message: "An error occured. Try again" });
    }
  }
  catch (e) {
    console.log(e)
  }
};
const createITrainee = async (req: Request, res: Response) => {
  try {
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
  } }
  catch (e) {
    console.log(e)
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

  res.status(200).json({...(user._doc), type: req.type});
};

const generateToken = (id: string, type: string) => {
  return jwt.sign({ id, type }, 'abc123', {
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
      const filter = req.body 
      const update = { Status: 'Pending' };  
      await problem.findOneAndUpdate(filter, update);
      res.status(200).json("Problem Pending");
        };

      const refundUser = async (req, res) => {
          if (req.type != userTypes.admin){
            res.status(400).json("Authoraization failed");
          }else{
        var  user =   await inidvTrainee.findOne({_id:req.body._id.trim()});
        
        if (user){
          var namount = Number(user.Wallet)+Number(req.body.amount);
          await inidvTrainee.findOneAndUpdate({_id:req.body._id.trim()},{Wallet:namount});
          res.status(200).json("User Refunded");
        }else{
          res.status(400).json("User not found");
        }
      }
        };

    
        
export {
  createAdmin,
  createInstructor,
  createCTrainee,
  createITrainee,
  createCorporate,
  login,
  me,
  findUserType,
  getProblems,
  resolveProblems,
  holdProblems,
  getInstructors,
  deleteInstructor,
  updateInstructor,
  createCorp,
  getCorps,
  getAdmins,
  getCTrainees,
  getITrainees,
  deleteCorptrainee,
  deleteIndivtrainee,
  deleteCorp,
  refundUser
};
