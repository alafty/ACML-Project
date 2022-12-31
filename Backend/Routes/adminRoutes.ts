import {
  createAdmin,
  createInstructor,
  createITrainee,
  login,
  editInstructorDetails,
  createCorporate
} from "../Controllers/adminController";
import { Router } from "express";
const adminRouter = Router();

adminRouter.post("/admin", createAdmin);
adminRouter.post("/instructor", createInstructor);
adminRouter.post("/corporate", createCorporate);
adminRouter.post("/individualTrainee", createITrainee);
adminRouter.post("/login", login);
adminRouter.post("/editInstructor", editInstructorDetails)

export default adminRouter;
