import { Router } from "express";
import {
  addRating,
  editInstructorDetails,
  viewCourseRatings,
  viewInstructorRatings,
} from "../Controllers/instructorController";
import { protect } from "../Middleware/authMiddleware";

const instructorRouter = Router();

instructorRouter.post("/rate", protect, addRating); // Protect. Type == indivTrainee || corpTrainee
instructorRouter.post("/coursesRate", viewCourseRatings);
instructorRouter.post("/instructorRate", viewInstructorRatings);
instructorRouter.post("/edit", protect, editInstructorDetails); //Protect. Type = instructor. Edit bearer of token

export default instructorRouter;
