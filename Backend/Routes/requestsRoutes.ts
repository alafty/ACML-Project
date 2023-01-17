
import { Router } from "express";
import { createRequest, fetchRequests,acceptRequests,rejectRequests } from "../Controllers/requestsController";

const requestRouter = Router();

requestRouter.post('/create', createRequest);
requestRouter.post('/fetch', fetchRequests);
requestRouter.delete('/accept',acceptRequests);
requestRouter.delete('/reject',rejectRequests);


export default requestRouter;
