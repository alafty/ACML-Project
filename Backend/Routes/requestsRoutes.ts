
import { Router } from "express";
import { createRequest, fetchRequests,acceptRequests } from "../Controllers/requestsController";

const requestRouter = Router();

requestRouter.post('/create', createRequest);
requestRouter.post('/fetch', fetchRequests);
requestRouter.delete('/accept',acceptRequests);

export default requestRouter;
