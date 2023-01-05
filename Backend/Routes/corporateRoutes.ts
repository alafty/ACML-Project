import {
    fetchCorporates
  } from "../Controllers/corporatesController";
  import { Router } from "express";
  import { protect } from "../Middleware/authMiddleware";
  const corporateRouter = Router();
  
  corporateRouter.get("/getAll", fetchCorporates);
  
  export default corporateRouter;
  