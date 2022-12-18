import { Router } from "express";

const QuizRouter = Router();
import {setAnswer,createQuestion, getQuiz,getCourseQuizzes} from "../Controllers/quizController";

QuizRouter.post("/Quiz", getQuiz);
QuizRouter.post("/createQuestion", createQuestion);
QuizRouter.post("/setAnswer", setAnswer);
QuizRouter.post("/getCourseQuizzes", getCourseQuizzes);


export default QuizRouter;