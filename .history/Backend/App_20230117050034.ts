// External variables
import express from "express";
import { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

//Setting up .env file. Getting the .env file that corresponds to our environment (local, stage, production, etc...)
require("dotenv").config();
require("dotenv").config({ path: `EnvFiles/.env.${process.env.NODE_ENV}` });
const cors = require('cors');

import connectDB from "./db";
import adminRouter from "./Routes/adminRoutes";
import filterRoute from "./Routes/filterRoutes";
import countryRouter from "./Routes/countryRoutes";
import quizRouter  from "./Routes/quizRoute";
import passwordResetRouter  from "./Routes/passwordResetRoute";
import pdfRouter from "./Routes/pdfRoutes";
import requestRouter from "./Routes/requestsRoutes";
import problemRouter from "./Routes/problemRoutes";

import { createCookie } from "./Controllers/cookieController";
import { getGuestCookie } from "./Controllers/guestController";
import instructorRouter from "./Routes/instructorRoutes";
import coursesRouter from "./Routes/coursesRoutes";
import corporateRouter from "./Routes/corporateRoutes";

//App variables
const app: Application = express();
const port = process.env.PORT || "8000";
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors())

app.options('/passwordreset/setPassword', cors())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Cookie",
    
  );
  res.header("Access-Control-Allow-Credentials", "true");

  next();
});


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

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("You have everything installed!");
});

app.get("/cookie", getGuestCookie);
//Routing to different functionalities
app.use("/courses", coursesRouter);
app.use("/create", adminRouter);
app.use("/filter", filterRoute);
app.use("/country", countryRouter);
app.use('/courses', coursesRouter);
app.use("/quiz",quizRouter);
app.use("/passwordreset",passwordResetRouter);
app.use("/instructor", instructorRouter);
app.use("/corps", corporateRouter);
app.use("/requests", requestRouter);
app.use("/pdf", pdfRouter);
app.use("problem",problemRouter);