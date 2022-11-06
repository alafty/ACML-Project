import { Request } from "express";

const validateRequest = (
  checks: { id? : boolean ; [k: string]: boolean | undefined },
  body: any
): boolean => {
  var valid: boolean = true;

  let field: keyof typeof checks;
  for (field in checks) {
    if (checks[field] != undefined) {
      if (checks[field]) {
        valid = valid && body[field] != undefined;
      } else {
        valid = valid && body[field] == undefined;
      }
    }
  }

  return valid;
};

export type BooleanMapperWithId<Union extends string | number | symbol> = {
  [Prop in Union | 'id']?: boolean;
};

export default validateRequest;
