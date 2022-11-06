//USE THIS TEMPLATE WHEN MAKING A ROUTES FILE

import { Router } from "express";
const dummyRouter = Router();
import {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal,
} from "../Controllers/dummyController";

dummyRouter.get("/", getGoals);

dummyRouter.post("/", setGoals);

dummyRouter.put("/:id", updateGoal);

dummyRouter.delete("/:id", deleteGoal);

export default dummyRouter;
