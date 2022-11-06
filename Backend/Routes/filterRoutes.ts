import { Router } from "express";

const FiltersRouter = Router();
import { getBySubject,getBySubjectInstructor, getByRating, getByPrice, getByPriceInstructor } from "../Controllers/filterController";

FiltersRouter.get("/subject", getBySubject);
FiltersRouter.get("/rating", getByRating);
FiltersRouter.get("/price", getByPrice);
FiltersRouter.get("/subjectInstructor", getBySubjectInstructor);
FiltersRouter.get("/priceInstructor", getByPriceInstructor);


export default FiltersRouter;
