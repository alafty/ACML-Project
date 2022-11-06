import validateRequest from "./validatorBase";
import { Request } from "express";
import Course from '../../Backend/Models/course';

const courseInputValidate = (
  checks: {
    [k in keyof typeof Course.schema.obj]: boolean;
  },
  req: Request
): boolean => {    
  return validateRequest(checks, req);
};

export default courseInputValidate;
