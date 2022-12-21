import { Router } from "express";
import {
  getCourses,
  searchCourses,
  addCourse,
  hoverCourse,
  deleteCourse,

  addRating,

  putCourseSubtitle

} from "../Controllers/coursesController";

const coursesRouter = Router();

coursesRouter.route("/").get(getCourses).post(addCourse);

coursesRouter.post("/search", searchCourses);

coursesRouter.put('/subtitle', putCourseSubtitle);

coursesRouter.delete('/courses', deleteCourse);

coursesRouter.post("/hover", hoverCourse);

coursesRouter.post("/rate", addRating);

export default coursesRouter;
