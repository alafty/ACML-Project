import {
  createAdmin,
  createInstructor,
  createCTrainee,
  createITrainee,
  createCorporate,
  login,
  me,
} from "../Controllers/adminController";
import { Router } from "express";
import { protect } from "../Middleware/authMiddleware";
const adminRouter = Router();

adminRouter.post("/admin", protect, createAdmin); // Protect and make sure that the type is admin
adminRouter.post("/instructor", createInstructor);
adminRouter.post("/corporateTrainee", createCTrainee); //Should protect. Type == admin || corp. Corp = user.name
adminRouter.post("/individualTrainee", createITrainee);
adminRouter.post("/login", login);
adminRouter.get("/me", protect, me); // Protect. Return only user
adminRouter.post("/corporate", createCorporate);

export default adminRouter;
