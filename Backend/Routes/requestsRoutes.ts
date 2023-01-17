
import { Router } from "express";
import { createRequest, fetchRequests } from "../Controllers/requestsController";

const requestRouter = Router();

requestRouter.post('/create', createRequest);
requestRouter.post('/fetch', fetchRequests);

export default requestRouter;
