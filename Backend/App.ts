// External variables
import express from "express";
import { Application, Request, Response } from "express";
import bodyParser from "body-parser";

//Setting up .env file. Getting the .env file that corresponds to our environment (local, stage, production, etc...)
require("dotenv").config();
require("dotenv").config({ path: `EnvFiles/.env.${process.env.NODE_ENV}` });

import connectDB from "./db";



//App variables
const app: Application = express();
const port = process.env.PORT || "8000";

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

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
/*
                                                    Start of your code
*/
app.get("/home", (req: Request, res: Response) => {
  res.status(200).send("You have everything installed!");
});

// #Routing to userController here

require("./Routes/coursesRoutes")(app);
require("./Routes/adminRoutes")(app);

/*
                                                    End of your code
*/
