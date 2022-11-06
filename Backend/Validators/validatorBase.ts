import { Request } from "express";

const validateRequest = (
  checks: { [k: string]: boolean },
  req: Request
): boolean => {
  var valid: boolean = true;

  let field: keyof typeof checks;
  for (field in checks) {
    if (checks[field] != undefined) {
    if (checks[field]) {
      valid = valid && req.body[field] != undefined;
    } else {
      valid = valid && req.body[field] == undefined;
    }
  }
  }

  return valid;
};

export default validateRequest;
