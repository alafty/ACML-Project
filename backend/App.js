// External variables
const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const connectDB = require('./db.js');
const bodyParser = require('body-parser')

//App variables
const app = express();
const port = process.env.PORT || "8000";

app.use(bodyParser.urlencoded({
  extended: true
}));


// configurations
// Mongo DB
connectDB()
.then(()=>{
  console.log("MongoDB is now connected!")
// Starting server
 app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  })
})
.catch(err => console.log(err));
/*
                                                    Start of your code
*/
app.get("/home", (req, res) => {
    res.status(200).send("You have everything installed!");
  });

// #Routing to userController here

require('./Routes/coursesRoutes')(app);


/*
                                                    End of your code
*/

