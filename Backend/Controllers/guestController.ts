import { Request, Response } from "express";
import guestInputValidate from "../Validators/guestValidator";
import { getCookie } from "./cookieController";

// @desc    Get Guest country
// @access  private
const getGuestCookie = (req: Request, res: Response) => {
  const cookie = getCookie(req);
  res.status(200).json(cookie.userData);
};

// @desc    Set Guest
// @access  private
const setGuestCountry = (req: Request, res: Response) => {
  // TODO: Implement
  if (guestInputValidate({ Country: true }, req)) {
    const cookie = req.cookies.userData;
    cookie.Country = req.body.Country;
    res.cookie("userData", cookie).status(200).json(req.cookies);
  } else {
    res.status(400).json({ message: "Make sure country is selected" });
  }
};

export { getGuestCookie, setGuestCountry };
