import { Request } from "express";

const validateRequest = (
  checks: { id: boolean; [k: string]: boolean },
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

export type BooleanMapperWithId<Union extends string | number | symbol> = {
  [Prop in Union | 'id']: boolean;
};

export default validateRequest;
