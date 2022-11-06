import { Request } from "express";
import type Guest from "../Models/guest";
import validateRequest from "./validatorBase";

const guestInputValidate = (
  checks: {
    [k in keyof Guest]: boolean;
  },
  req: Request
): boolean => {
  return validateRequest(checks, req);
};

export default guestInputValidate;
