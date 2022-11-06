import { Request, Response, NextFunction } from "express";

const createCookie = (req: Request, res: Response, next: NextFunction) => {
  // by using cookie-parser

  if (!req.cookies.myCookie) {
    res.cookie("userData", { Country: "Egypt" });
  }

  next();
};

const getCookie = (req: Request) => {
  return req.cookies;
};

export { createCookie, getCookie };
