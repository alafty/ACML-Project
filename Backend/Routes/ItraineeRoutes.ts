import { viewMyCourses } from "../Controllers/ItraineeController";
import { Router } from "express";

const iTraineeRouter = Router ();


iTraineeRouter.post("/viewCourses",viewMyCourses);

export default iTraineeRouter;