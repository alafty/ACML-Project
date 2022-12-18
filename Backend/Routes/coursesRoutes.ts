import { Router } from "express";
import {
  getCourses,
  searchCourses,
  addCourse,
  hoverCourse,
  deleteCourse,
  putCourseSubtitle,
  putCourseVideo,
} from "../Controllers/coursesController";

const coursesRouter = Router();

coursesRouter.route("/").get(getCourses).post(addCourse).delete(deleteCourse);

coursesRouter.post("/search", searchCourses);

coursesRouter.route("/id").post(getCourses);

coursesRouter.put("/subtitle", putCourseSubtitle);

coursesRouter.put("/videoId", putCourseVideo);

coursesRouter.post("/hover", hoverCourse);

export default coursesRouter;
