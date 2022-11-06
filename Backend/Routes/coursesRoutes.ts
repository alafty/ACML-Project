import { Router } from "express";
import {
  getCourses,
  searchCourses,
  addCourse,
  hoverCourse,
} from "../Controllers/coursesController";

const coursesRouter = Router();

coursesRouter.route("/").get(getCourses).post(addCourse);

coursesRouter.get("/search", searchCourses);

coursesRouter.get("/hover", hoverCourse);

export default coursesRouter;
