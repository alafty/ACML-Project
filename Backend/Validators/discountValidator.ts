import validateRequest, { BooleanMapperWithId } from "./validatorBase";
import { Request } from "express";
import Discount from '../../Backend/Models/discount';

type discountTypeCheck = BooleanMapperWithId<keyof typeof Discount.schema.obj>;

const discountInputValidate = (
  checks: {[k in keyof discountTypeCheck]: boolean},
  body: any
): boolean => {    
  return validateRequest(checks, body);
};

export default discountInputValidate;
