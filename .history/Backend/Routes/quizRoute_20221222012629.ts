import { Router } from "express";

const QuizRouter = Router();
import {setAnswer,createQuestion, getQuiz ,getCourseQuizzes} from "../Controllers/quizController";

QuizRouter.post("/getQuiz", getQuiz);
QuizRouter.post("/createQuestion", createQuestion);
QuizRouter.get("/setAnswer", setAnswer);
QuizRouter.get("/getCourseQuizzes", getCourseQuizzes);




export default QuizRouter;