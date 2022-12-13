import {
  createAdmin,
  createInstructor,
  createCTrainee,
  createITrainee,
  login,
  editInstructorDetails
} from "../Controllers/adminController";
import { Router } from "express";
const adminRouter = Router();

adminRouter.post("/admin", createAdmin);
adminRouter.post("/instructor", createInstructor);
adminRouter.post("/corporateTrainee", createCTrainee);
adminRouter.post("/individualTrainee", createITrainee);
adminRouter.post("/login", login);
adminRouter.post("/editInstructor", editInstructorDetails)

export default adminRouter;
