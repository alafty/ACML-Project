import { Router } from "express";

const PasswordResetRouter = Router();
import {sendLink,setPassword,verifyLink} from "../Controllers/restPassController";

PasswordResetRouter.post ("/SendLink", sendLink);
PasswordResetRouter.post("/setPassword/:id/:token", setPassword);
PasswordResetRouter.get("/setPassword/:id/:token",verifyLink);


export default PasswordResetRouter;