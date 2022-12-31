import {
    addCorporateTrainee,
}
from "../Controllers/corporateController"

import { Router } from "express";
const corporateRouter = Router();

corporateRouter.post("/newCT" , addCorporateTrainee);

export default corporateRouter;