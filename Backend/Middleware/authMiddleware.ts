import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { findUserType } from "../Controllers/adminController";

const protect = async (req: Request, res: Response, next: NextFunction) => {
  if (
    req.headers.authorization &&
    req.headers.authorization!.startsWith("Bearer")
  ) {
    try {
      // Get token
      var token = req.headers.authorization.split(" ")[1];
      if (!token) {
        res.status(401).json({ message: "No token" });
        return;
      }
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
        id: string;
        type: string | null;
      };

      if (decoded) {
        // Add user to req
        var { user, type } = await findUserType("_id", decoded.id);
        if (!user) {
          res.status(401).json({ message: "Not authorized" });
          return;
        }

        req.user = user;
        req.type = type;

        next();
      } else {
        res.status(401).json({ message: "Not authorized" });
        return;
      }
    } catch (error) {
      res.status(401).json({ message: "Not authorized" });
      return;
    }
  } else {
    res.status(401).json({ message: "Not authorized" });
  }
};

export { protect };
