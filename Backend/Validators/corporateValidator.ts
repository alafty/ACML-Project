import validateRequest, { BooleanMapperWithId } from "./validatorBase";
import { Request } from "express";
import corporate from "../Models/corporate";

type corporateTypeCheck = BooleanMapperWithId<
  keyof typeof corporate.schema.obj
>;

const corporateInputValidate = (
  checks: { [k in keyof corporateTypeCheck]: boolean | undefined },
  req: Request
): boolean => {
  return validateRequest(checks, req.body);
};

export default corporateInputValidate;
