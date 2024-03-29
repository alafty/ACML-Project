import { Request, Response } from "express";
import cTrainee from "../Models/corporateTrainee";
import {
  corporateTraineeValidator,
  individualTraineeValidator,
} from "../Validators/validators";
import iTrainee from "../Models/individualTrainee";
import instructorValidator from "../Validators/instructorValidator";
import instructor from "../Models/instructor";

const setCorporateTraineeCountry = async (req: Request, res: Response) => {
  const inputValid = corporateTraineeValidator(
    {
      id: true,
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
    res.status(400).json({ message: "Make sure all fields are valid" });
  }
};

const setIndividualTraineeCountry = async (req: Request, res: Response) => {
  const inputValid = individualTraineeValidator(
    {
      id: true,
    },
    req
  );
  if (inputValid) {
    const result = await iTrainee.findByIdAndUpdate(req.body.id, {
      Country: req.body.Country,
    });
    if (result != undefined) {
      res.status(200).json(await iTrainee.findById(req.body.id));
    } else {
      res.status(400).json({ message: "An error happened while updating" });
    }
  } else {
    res.status(400).json({ message: "Make sure all fields are valid" });
  }
};

const setInstructorCountry = async (req: Request, res: Response) => {
  const inputValid = instructorValidator(
    {
      id: true,
      //Country: true,
    },
    req
  );

  if (inputValid) {
    const result = await instructor.findByIdAndUpdate(req.body.id, {
      Country: req.body.Country,
    });
    if (result != undefined) {
      res.status(200).json(await instructor.findById(req.body.id));
    } else {
      res.status(400).json({ message: "An error happened while updating" });
    }
  } else {
    res.status(400).json({ message: "Make sure all fields are valid" });
  }
};

export {
  setCorporateTraineeCountry,
  setIndividualTraineeCountry,
  setInstructorCountry,
};
