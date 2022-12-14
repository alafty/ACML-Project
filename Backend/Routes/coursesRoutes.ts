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

coursesRouter.route("/").get(getCourses).post(addCourse);

coursesRouter.post("/search", searchCourses);

coursesRouter.put("/subtitle", putCourseSubtitle);

coursesRouter.put("/videoId", putCourseVideo);

coursesRouter.delete("/courses", deleteCourse);

coursesRouter.post("/hover", hoverCourse);

export default coursesRouter;
