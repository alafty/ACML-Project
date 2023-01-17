import { Request, Response } from "express";
import problem from "../Models/problem";


const createPrpblem = async (req: Request, res: Response) => {
    try {
  
  
      // Create
      var t = await problem.create(req.body);
      if (t) {
        res
          .status(200)
          .json({ ...t.toJSON()});
      } else {
        res.status(500).json({ message: "An error occured. Try again" });
      }
    }
    catch (e) {
      console.log(e)
    }
  };