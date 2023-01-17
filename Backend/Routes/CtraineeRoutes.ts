import { viewMyCourses2 } from "../Controllers/CtraineeController";
import { Router } from "express";

const cTraineeRouter = Router ();


cTraineeRouter.post("/viewCourses",viewMyCourses2);

export default cTraineeRouter;