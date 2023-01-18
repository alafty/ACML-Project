import validateRequest, { BooleanMapperWithId } from "./validatorBase";
import { Request } from "express";
import problem from "../Models/problem";

type problemTypeCheck = BooleanMapperWithId<keyof typeof problem.schema.obj>;

const problemInputValidate = (
  checks: {[k in keyof problemTypeCheck]: boolean},
  req: Request
): boolean => {    
  return validateRequest(checks, req.body);
};

export default problemInputValidate;
