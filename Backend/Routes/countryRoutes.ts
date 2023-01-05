///Country can be set for the following:
/// Guests
/// Instructors
/// Individual Trainee
/// Corporate Trainee
import { Router } from "express";
import { setGuestCountry } from "../Controllers/guestController";

const countryRouter = Router();

countryRouter.put('/local', setGuestCountry);

export default countryRouter;
