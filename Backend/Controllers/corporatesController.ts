import { Request, Response } from "express";
import corporate from "../Models/corporate";

// @desc    Get all corporates
// @access  private
const fetchCorporates = (req: Request, res: Response) => {
  const allCorps = corporate.find({});
  res.status(200).json(allCorps);
};



export { fetchCorporates };
