import { Router } from "express";
import {
  getCourses,
  searchCourses,
  addCourse,
  hoverCourse,
  deleteCourse,
} from "../Controllers/coursesController";

const coursesRouter = Router();

coursesRouter.route("/").get(getCourses).post(addCourse);

coursesRouter.post("/search", searchCourses);

coursesRouter.delete('/courses', deleteCourse);

coursesRouter.post("/hover", hoverCourse);

export default coursesRouter;
