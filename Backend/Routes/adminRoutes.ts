import { createAdmin, createInstructor, createCTrainee } from "../Controllers/adminController";
import { Router } from "express";
const adminRouter = Router();


adminRouter.post("/admin", createAdmin);
adminRouter.post("/instructor", createInstructor);
adminRouter.post("/corporateTrainee", createCTrainee);

export default adminRouter;

