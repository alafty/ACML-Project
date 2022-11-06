import { Router } from "express";
import {
  getCourses,
  searchCourses,
  addCourse,
} from "../Controllers/coursesController";

const coursesRouter = Router();

coursesRouter.route("/").get(getCourses).post(addCourse);

coursesRouter.get("/search", searchCourses);

export default coursesRouter;
