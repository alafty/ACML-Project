import validateRequest, { BooleanMapperWithId } from "./validatorBase";
import { Request } from "express";
import admin from "../Models/admin";

type adminTypeCheck = BooleanMapperWithId<
  keyof typeof admin.schema.obj
>;

const adminInputValidate = (
  checks: { [k in keyof adminTypeCheck]: boolean | undefined },
  req: Request
): boolean => {
  return validateRequest(checks, req.body);
};

export default adminInputValidate;
