import { Router } from "express";
import {
  addRating,
  editInstructorDetails,
  viewCourseRatings,
  viewInstructorRatings,
} from "../Controllers/instructorController";

const instructorRouter = Router();

instructorRouter.post("/rate", addRating); // Protect. Type = indivTrainee or 
instructorRouter.post("/coursesRate", viewCourseRatings);
instructorRouter.post("/instructorRate", viewInstructorRatings);
instructorRouter.post("/edit", editInstructorDetails); //Protect. Type = instructor. Edit bearer of token

export default instructorRouter;
