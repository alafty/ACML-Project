// External variables
var express = require("express");
var mongoose = require('mongoose');
var dotenv = require('dotenv').config();
var connectDB = require('./Backend/db.js');
var bodyParser = require('body-parser');
//App variables
const filterRoute = require('./Backend/Routes/FilterRoutes');
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
        console.log("Listening to requests on http://localhost:".concat(port));
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
const Controller = require('./Backend/Controllers/filterController');
/*
                                                    End of your code
*/
