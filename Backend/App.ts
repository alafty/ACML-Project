// External variables
import express from "express";
import { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

//Setting up .env file. Getting the .env file that corresponds to our environment (local, stage, production, etc...)
require("dotenv").config();
require("dotenv").config({ path: `EnvFiles/.env.${process.env.NODE_ENV}` });

import connectDB from "./db";
import coursesRouter from "./Routes/coursesRoutes";
import adminRouter from "./Routes/adminRoutes";
import filterRoute from "./Routes/filterRoutes";
import countryRouter from "./Routes/countryRoutes";
import { createCookie } from "./Controllers/cookieController";
import { getGuestCookie } from "./Controllers/guestController";

//App variables
const app: Application = express();
const port = process.env.PORT || "8000";

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cookieParser());
app.use(createCookie);

// configurations
// Mongo DB
connectDB()
  .then(() => {
    console.log("MongoDB is now connected!");
    // Starting server
    app.listen(port, () => {
      console.log(`Listening to requests on http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));

app.get("/home", (req: Request, res: Response) => {
  res.status(200).send("You have everything installed!");
});

app.get("/cookie", getGuestCookie);
//Routing to different functionalities
app.use("/courses", coursesRouter);
app.use("/create", adminRouter);
app.use("/filter", filterRoute);
app.use("/country", countryRouter);
