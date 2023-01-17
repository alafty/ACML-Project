import {
    createProblem,
    getMyProblems
  } from "../Controllers/problemController";
  import { Router } from "express";
  const problemRouter = Router();
  problemRouter.post("/create",createProblem);
  problemRouter.post("/view",getMyProblems);
  
  export default  problemRouter ;
  ;
  