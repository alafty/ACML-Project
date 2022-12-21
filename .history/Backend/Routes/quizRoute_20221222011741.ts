import { Router } from "express";

const QuizRouter = Router();
import {setAnswer,createQuestion, getQuiz} from "../Controllers/quizController";

QuizRouter.post("/getQuiz", getQuiz);
QuizRouter.post("/createQuestion", createQuestion);
QuizRouter.get("/setAnswer", setAnswer);



export default QuizRouter;