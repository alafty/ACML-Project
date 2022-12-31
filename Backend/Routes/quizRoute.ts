import { Router } from "express";

const QuizRouter = Router();
import {createQuiz , setAnswer,createQuestion, getQuiz ,getCourseQuizzes} from "../Controllers/quizController";

QuizRouter.post("/getQuiz", getQuiz);
QuizRouter.post("/createQuestion", createQuestion);
QuizRouter.get("/setAnswer", setAnswer);
QuizRouter.post("/getCourseQuizzes", getCourseQuizzes);
QuizRouter.post("/create", createQuiz);




export default QuizRouter;