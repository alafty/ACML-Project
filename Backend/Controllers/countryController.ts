import { Request, Response } from "express";
import cTrainee from "../Models/corporateTrainee";
import {corporateTraineeValidator, individualTraineeValidator } from "../Validators/validators";
import iTrainee from "../Models/individualTrainee";

const setCorporateTraineeCountry = async (req: Request, res: Response) => {
  const inputValid = corporateTraineeValidator(
    {
      id: true,
      Country: true,
    },
    req
  );
  if (inputValid) {
    const result = await cTrainee.findByIdAndUpdate(req.body.id, {
      Country: req.body.Country,
    });
    if (result != undefined) {
      res.status(200).json(await cTrainee.findById(req.body.id));
    }
  } else {
    res.status(400).json({ message: "Make usre all fields are valid" });
  }
};


const setIndividualTraineeCountry = async (req: Request, res: Response) => {
  const inputValid = individualTraineeValidator(
    {
      id: true,
      Country: true,
    },
    req
  );
  if (inputValid) {
    const result = await iTrainee.findByIdAndUpdate(req.body.id, {
      Country: req.body.Country,
    });
    if (result != undefined) {
      res.status(200).json(await iTrainee.findById(req.body.id));
    }
  } else {
    res.status(400).json({ message: "Make usre all fields are valid" });
  }
};

export { setCorporateTraineeCountry , setIndividualTraineeCountry }