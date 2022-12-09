import {
  createAdmin,
  createInstructor,
  createCTrainee,
  createITrainee,
} from "../Controllers/adminController";
import { Router } from "express";
const adminRouter = Router();

adminRouter.post("/admin", createAdmin);
adminRouter.post("/instructor", createInstructor);
adminRouter.post("/corporateTrainee", createCTrainee);
adminRouter.post("/individualTrainee", createITrainee);

export default adminRouter;
