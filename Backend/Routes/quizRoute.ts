import { Router } from "express";

const QuizRouter = Router();
import {setAnswer,createQuestion, getQuiz ,getCourseQuizzes} from "../Controllers/quizController";

QuizRouter.post("/getQuiz", getQuiz);
QuizRouter.post("/createQuestion", createQuestion); // Protect. Type == instructor
QuizRouter.get("/setAnswer", setAnswer); // Protect. Type == instructor. Creator id == user id
QuizRouter.post("/getCourseQuizzes", getCourseQuizzes);  // Protect. Type == indivTrainee || corpTrainee && bought course


export default QuizRouter;