//USE THIS TEMPLATE WHEN MAKING A ROUTES FILE

const express = require('express');
const FiltersRouter = express.Router();
import { getByRating,getByPrice, getBySubject} from "../Controllers/filterController";

FiltersRouter.get('/filter/rating', getByRating);
FiltersRouter.get('/filter/subject', getByPrice);
FiltersRouter.get('/filter/price', getBySubject);



module.exports = FiltersRouter;