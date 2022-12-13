import { Router } from "express";

const QuizRouter = Router();
import {setAnswer,createQuestion, getQuiz} from "../Controllers/quizController";

QuizRouter.get("/Quiz", getQuiz);
QuizRouter.get("/createQuestion", createQuestion);
QuizRouter.get("/setAnswer", setAnswer);



export default QuizRouter;