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
  recommendedCourses
  purchaseCourse
} from "../Controllers/coursesController";
import { protect } from "../Middleware/authMiddleware";

const coursesRouter = Router();

coursesRouter
  .route("/")
  .get(getCourses)
  .post(protect, addCourse) // Protect. Type = instructor || admin. Post by id
  .delete(protect, deleteCourse); // Protect. Type = instructor || admin. Course creator == id

coursesRouter.post("/search", searchCourses);

coursesRouter.route("/id").post(getCourses);

coursesRouter.put("/subtitle", protect, putCourseSubtitle); // Protect. Type = instructor || admin. Course creator == id

coursesRouter.put("/videoId", protect, putCourseVideo); // Protect. Type = instructor || admin. Course creator == id

coursesRouter.put("/discount", protect, putDiscount); // Protect. Type = instructor || admin. Course creator == id

coursesRouter.post("/hover", hoverCourse);

coursesRouter.post("/rate", protect, addRating); // Protect. Type == indivTrainee || corpTrainee

coursesRouter.get('/recommended', recommendedCourses);

coursesRouter.put("/payCourse",purchaseCourse);

export default coursesRouter;
