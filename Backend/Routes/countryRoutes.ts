///Country can be set for the following:
/// Guests
/// Instructors
/// Individual Trainee
/// Corporate Trainee
import { Router } from "express";
import { setCorporateTraineeCountry, setIndividualTraineeCountry, setInstructorCountry } from "../Controllers/countryController";
import { setGuestCountry } from "../Controllers/guestController";

const countryRouter = Router();

countryRouter.put("/corpTrainee", setCorporateTraineeCountry);
countryRouter.put("/indivTrainee", setIndividualTraineeCountry);
countryRouter.put("/instructor", setInstructorCountry);
countryRouter.put('/local', setGuestCountry);

export default countryRouter;
