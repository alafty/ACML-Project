///Country can be set for the following:
/// Guests
/// Instructors
/// Individual Trainee
/// Corporate Trainee
import { Router } from "express";
import { setCorporateTraineeCountry } from "../Controllers/corporateTraineeController";

const countryRouter = Router();

countryRouter.put("/corpTrainee", setCorporateTraineeCountry);

export default countryRouter;
