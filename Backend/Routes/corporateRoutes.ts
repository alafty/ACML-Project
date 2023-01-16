import {
    fetchCorporates,
    changePackage
  } from "../Controllers/corporatesController";
  import { Router } from "express";
  import { protect } from "../Middleware/authMiddleware";
  const corporateRouter = Router();
  
  corporateRouter.get("/getAll", fetchCorporates);
  corporateRouter.post('/changePackage', changePackage);
  
  export default corporateRouter;
  