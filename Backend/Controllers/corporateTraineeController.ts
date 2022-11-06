import { Request, Response } from "express";
import cTrainee from "../Models/corporateTrainee";
import corpTraineeValidate from "../Validators/corporateTraineeValidator";

const setCorporateTraineeCountry = async (req: Request, res: Response) => {
  const inputValid = corpTraineeValidate(
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
    res.status(400).json({message: 'Make usre all fields are valid'});
  }
};

export { setCorporateTraineeCountry };
