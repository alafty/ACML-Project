import validateRequest, { BooleanMapperWithId } from "./validatorBase";
import { Request } from "express";
import indivTrainee from "../Models/individualTrainee";

type indivTraineeTypeCheck = BooleanMapperWithId<
  keyof typeof indivTrainee.schema.obj
>;

const indivTraineeInputValidate = (
  checks: { [k in keyof indivTraineeTypeCheck]: boolean | undefined },
  req: Request
): boolean => {
  return validateRequest(checks, req);
};

export default indivTraineeInputValidate;
