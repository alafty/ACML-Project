import { Router } from "express";
import {
  addRating,
  viewCourseRatings,
  viewInstructorRatings,
} from "../Controllers/instructorController";

const instructorRouter = Router();

instructorRouter.post("/rate", addRating);
instructorRouter.post("/coursesRate", viewCourseRatings);
instructorRouter.post("/instructorRate", viewInstructorRatings);

export default instructorRouter;
