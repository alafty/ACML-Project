import { Router } from "express";
import {
  addRating,
  viewCourseRatings,
  viewInstructorRatings,
  getInstructorData
} from "../Controllers/instructorController";

const instructorRouter = Router();

instructorRouter.post("/rate", addRating);
instructorRouter.post("/coursesRate", viewCourseRatings);
instructorRouter.post("/instructorRate", viewInstructorRatings);
instructorRouter.post("/getData", getInstructorData);

export default instructorRouter;
