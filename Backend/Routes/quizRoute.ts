import { Router } from "express";

const QuizRouter = Router();
import {setAnswer,createQuestion, getQuiz,getCourseQuizzes} from "../Controllers/quizController";

QuizRouter.post("/getQuiz", getQuiz);
QuizRouter.post("/createQuestion", createQuestion);
QuizRouter.get("/setAnswer", setAnswer);
QuizRouter.post("/getCourseQuizzes", getCourseQuizzes);




export default QuizRouter;