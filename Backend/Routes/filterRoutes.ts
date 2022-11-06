import { Router } from "express";

const FiltersRouter = Router();
import { getBySubject, getByRating, getByPrice } from "../Controllers/filterController";

FiltersRouter.get("/subject", getBySubject);
FiltersRouter.get("/rating", getByRating);
FiltersRouter.get("/price", getByPrice);


export default FiltersRouter;
