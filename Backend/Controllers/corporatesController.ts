import { Request, Response } from "express";
import corporate from "../Models/corporate";

// @desc    Get all corporates
// @access  private
const fetchCorporates = (req: Request, res: Response) => {
  const allCorps = corporate.find({});
  res.status(200).json(allCorps);
};

const changePackage = (req: Request, res:Response) => {
  if(!req.body.id || !req.body.packageID){
    res.status(400).json({message: "Corporate ID or new package ID is missing"});
  } 
  corporate.findByIdAndUpdate(req.body.id,{Package: req.body.packageID}, function(err, result){
    if(err){
        res.status(404).json(err);
    }
    else{
        res.status(200).json(result);
    }
})
}

export { fetchCorporates, changePackage };
