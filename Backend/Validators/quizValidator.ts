import validateRequest, { BooleanMapperWithId } from "./validatorBase";
import { Request } from "express";
import quiz from "../Models/quiz";

type quizTypeCheck = BooleanMapperWithId<
  keyof typeof quiz.schema.obj
>;

const quizInputValidate = (
  checks: { [k in keyof quizTypeCheck]: boolean | undefined },
  req: Request
): boolean => {
  return validateRequest(checks, req.body);
};

export default quizInputValidate;