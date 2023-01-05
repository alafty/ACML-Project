import {
  createAdmin,
  createInstructor,
  createCTrainee,
  createITrainee,
  login,
  me,
  getProblems,
  resolveProblems,
  holdProblems,
  getInstructors,
  deleteInstructor,
  updateInstructor,
  createCorp,
  getAdmins,
  getCTrainees,
  getITrainees,
  getCorps
} from "../Controllers/adminController";
import { Router } from "express";
import { protect } from "../Middleware/authMiddleware";
const adminRouter = Router();

adminRouter.post("/admin", createAdmin); // Protect and make sure that the type is admin
adminRouter.post("/instructor", createInstructor);
adminRouter.get("/instructor",getInstructors);
adminRouter.delete("/instructor", deleteInstructor);
adminRouter.put("/instructor", updateInstructor);
adminRouter.post("/corporateTrainee", createCTrainee); //Should protect. Type == admin || corp. Corp = user.name
adminRouter.post("/individualTrainee", createITrainee);
adminRouter.post("/login", login);
adminRouter.get("/me", protect, me); // Protect. Return only user
adminRouter.get("/problem",getProblems);
adminRouter.put("/resolveProblem",resolveProblems)
adminRouter.put("/holdProblem",holdProblems)
adminRouter.post("/corporate",createCorp)

export default adminRouter;
