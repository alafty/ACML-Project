import {
    createProblem
  } from "../Controllers/problemController";
  import { Router } from "express";
  const problemRouter = Router();
  problemRouter.post("/create",createProblem);
  
  export default  problemRouter ;
  ;
  