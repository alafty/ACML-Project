import validateRequest, { BooleanMapperWithId } from "./validatorBase";
import { Request } from "express";
import Subtitle from "../Models/subtitle";

type subtitleTypeCheck = BooleanMapperWithId<keyof typeof Subtitle.schema.obj>;

const subtitleInputValidate = (
  checks: {[k in keyof subtitleTypeCheck]: boolean},
  body: any
): boolean => {    
  return validateRequest(checks, body);
};

export default subtitleInputValidate;
