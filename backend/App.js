// External variables
const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const connectDB = require('./db.js');
const bodyParser = require('body-parser')
//App variables
const filterRoute = require('./backend/Routes/FilterRoutes');
var app = express();
var port = process.env.PORT || "8000";
connectDB()
app.use(bodyParser.urlencoded({
    extended: true
}));
// configurations
// Mongo DB
    connectDB()
    .then(function () {
    console.log("MongoDB is now connected!");
    // Starting server
    app.listen(port, function () {
        console.log(`Listening to requests on http://localhost:${port}`);
    });
})["catch"](function (err) { return console.log(err); });

app.use('/filter', filterRoute);

/*
                                                    Start of your code
*/
app.get("/home", function (req, res) {
    res.status(200).send("You have everything installed!");
});
// #Routing to userController here
const Controller = require('./backend/Controllers/filterController');
require('./Routes/coursesRoutes')(app);
require('./Routes/adminRoutes')(app);
/*
                                                    End of your code
*/
