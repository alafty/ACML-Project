import validateRequest, { BooleanMapperWithId } from "./validatorBase";
import { Request } from "express";
import corpTrainee from "../Models/corporateTrainee";

type corpTraineeTypeCheck = BooleanMapperWithId<
  keyof typeof corpTrainee.schema.obj
>;

const corpTraineeInputValidate = (
  checks: { [k in keyof corpTraineeTypeCheck]: boolean | undefined },
  req: Request
): boolean => {
  return validateRequest(checks, req.body);
};

export default corpTraineeInputValidate;
