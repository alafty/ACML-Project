import { Router } from "express";
import {
  addRating,
  viewCourseRatings,
  viewInstructorRatings,
  getInstructorData,
  editInstructorDetails
} from "../Controllers/instructorController";
import { protect } from "../Middleware/authMiddleware";

const instructorRouter = Router();

instructorRouter.post("/rate", protect, addRating); // Protect. Type == indivTrainee || corpTrainee
instructorRouter.post("/coursesRate", viewCourseRatings);
instructorRouter.post("/instructorRate", viewInstructorRatings);
instructorRouter.post("/getData", getInstructorData);

instructorRouter.put("/editData", editInstructorDetails);



export default instructorRouter;
