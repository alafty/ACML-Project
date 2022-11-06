import validateRequest, { BooleanMapperWithId } from "./validatorBase";
import { Request } from "express";
import instructor from "../Models/instructor";

type instructorTypeCheck = BooleanMapperWithId<
  keyof typeof instructor.schema.obj
>;

const instructorInputValidate = (
  checks: { [k in keyof instructorTypeCheck]: boolean | undefined },
  req: Request
): boolean => {
  return validateRequest(checks, req.body);
};

export default instructorInputValidate;