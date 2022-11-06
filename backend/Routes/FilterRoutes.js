//USE THIS TEMPLATE WHEN MAKING A ROUTES FILE

const express = require('express');
const FiltersRouter = express.Router();
const filterControllers =  require( "../Controllers/filterController");
const CourseModel = require("../Models/course");

FiltersRouter.get("/subject",filterControllers.getBySubject);
FiltersRouter.get("/rating", filterControllers.getByRating);
FiltersRouter.get("/price", filterControllers.getByPrice);

FiltersRouter.get("" ,async (request, response) => {
    const users = await CourseModel.find({});
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });
FiltersRouter.post("", async (request, response) => {
    console.log(request.body);
    const course = new CourseModel(request.body);
  
    try {
      await course.save();
      response.send(course);
      console.log("done");
    } catch (error) {
      response.status(500).send(error);
      console.log(error);
    }
  });




module.exports = FiltersRouter;