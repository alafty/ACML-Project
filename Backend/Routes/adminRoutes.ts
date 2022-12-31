import {
  createAdmin,
  createInstructor,
  createCTrainee,
  createITrainee,
  login,
  me,
} from "../Controllers/adminController";
import { Router } from "express";
import { protect } from "../Middleware/authMiddleware";
const adminRouter = Router();

adminRouter.post("/admin", createAdmin); // Protect and make sure that the type is admin
adminRouter.post("/instructor", createInstructor);
adminRouter.post("/corporateTrainee", createCTrainee);
adminRouter.post("/individualTrainee", createITrainee);
adminRouter.post("/login", login);
adminRouter.get("/me", protect ,me);

export default adminRouter;
