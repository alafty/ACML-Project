///Country can be set for the following:
/// Guests
/// Instructors
/// Individual Trainee
/// Corporate Trainee
import { Router } from "express";
import { setCorporateTraineeCountry, setIndividualTraineeCountry, setInstructorCountry } from "../Controllers/countryController";

const countryRouter = Router();

countryRouter.put("/corpTrainee", setCorporateTraineeCountry);
countryRouter.put("/indivTrainee", setIndividualTraineeCountry);
countryRouter.put("/instructor", setInstructorCountry);

export default countryRouter;
