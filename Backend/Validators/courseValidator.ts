import validateRequest, { BooleanMapperWithId } from "./validatorBase";
import { Request } from "express";
import Course from '../../Backend/Models/course';

type courseTypeCheck = BooleanMapperWithId<keyof typeof Course.schema.obj>;

const courseInputValidate = (
  checks: {[k in keyof courseTypeCheck]: boolean},
  req: Request
): boolean => {    
  return validateRequest(checks, req);
};

export default courseInputValidate;
