import { Router } from "express";
import {
  getCourses,
  searchCourses,
  addCourse,
  hoverCourse,
  deleteCourse,
  addRating,
  putCourseSubtitle,
  putCourseVideo,
  putDiscount,
} from "../Controllers/coursesController";

const coursesRouter = Router();

coursesRouter
  .route("/")
  .get(getCourses)
  .post(addCourse) // Protect. Type = instructor. Post by id
  .delete(deleteCourse); // Protect. Type = instructor. Course creator == id

coursesRouter.post("/search", searchCourses);

coursesRouter.route("/id").post(getCourses);

coursesRouter.put("/subtitle", putCourseSubtitle); // Protect. Type = instructor. Course creator == id

coursesRouter.put("/videoId", putCourseVideo); // Protect. Type = instructor. Course creator == id

coursesRouter.put("/discount", putDiscount); // Protect. Type = instructor. Course creator == id

coursesRouter.post("/hover", hoverCourse);

coursesRouter.post("/rate", addRating); // Protect. Type == indivTrainee || corpTrainee

export default coursesRouter;
