import {
    createProblem,
    getMyProblems
  } from "../Controllers/problemController";
  import { Router } from "express";
import { protect } from "../Middleware/authMiddleware";
  const problemRouter = Router();
  problemRouter.post("/create",createProblem);
  problemRouter.post("/view", protect ,getMyProblems);
  
  export default  problemRouter ;
  ;
  