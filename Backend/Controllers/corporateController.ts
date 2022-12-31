import { Request, Response } from "express";
import corporateTraineeValidate from "../Validators/corporateTraineeValidator";
import corporateTrainee from "../Models/corporateTrainee";


const addCorporateTrainee= async(req: Request, res: Response) => {
    const inputValid = corporateTraineeValidate(
        {
          Username: true,
          Email: true,
          Password: true,
          Corporate: true,
        },
        req
      );
      if (!inputValid) {
        res.status(400).json({ message: "Make sure all fields are here" });
      } else {
        const newCorporateTrainee = await corporateTrainee.create(req.body);
        res.status(200).json(newCorporateTrainee);
      }
}

export {
    addCorporateTrainee,
}