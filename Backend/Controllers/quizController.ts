import { Request, Response } from "express";
import questionBankModel from "../Models/questionBank";
import quiz from "../Models/quiz";
import course from "../Models/course";

const getQuiz= async (req: Request, res: Response) => {
    //used Acml as test name, replace to get the required name from the user
    // Courses should have attribute subject in them 
    var QuizID = req.body.Subject
    const Questions = await questionBankModel.find({QuizID: QuizID});
    try {
        res.send(Questions);
      } catch (error) {
        res.status(500).send(error);
      }
    // filter specific subjects
}
const getCourseQuizzes= async (req: Request, res: Response) => {
    //used Acml as test name, replace to get the required name from the user
    // Courses should have attribute subject in them 
    var CourseID = req.body.CourseID
    const Questions = await questionBankModel.findOne({Course:CourseID}).distinct('QuizID');
    try {
        res.send(Questions);
      } catch (error) {
        res.status(500).send(error);
      }
    // filter specific subjects
}
const createQuestion = async (req: Request, res: Response) => {
    console.log (req.body);
    const question ={
      Question: req.body.Question,
      Choice1: req.body.Choice1,
      Choice2: req.body.Choice2,
      Choice3: req.body.Choice3,
      Choice4: req.body.Choice4,
      Answer : req.body.Answer,
      Grade : req.body.Grade,
      Course : req.body.Course,
      QuizID : req.body.QuizID

    }
    await questionBankModel.create(question);
    var addedQuestion = await questionBankModel.findOne(req.body);
    var Course = await course.findOne({_id:req.body.Course})
    var Quiz = await quiz.findOne({_id:req.body.QuizID})
    //console.log(Course);
    //console.log(Quiz);
    //console.log(addedQuestion);
    Quiz.Questions.push(addedQuestion._id);
    Quiz.save();
    //Course.Quizzes.
    
    res.status(200).json({ message: "QuestionCreate" });
    
};
const createQuiz = async (req: Request, res: Response) => {
  const Quiz ={
    Order : req.body.Order,
    Questions : req.body.Questions
  }
  await quiz.create({Order: req.body.Order, Questions: req.body.Questions})
  var addedQuiz = await quiz.findOne(Quiz)
  // const Course = await course.findOne({_id:req.body.CourseID});
  // Course.Quizzes.push(addedQuiz._id)
  // Course.save();
  res.status(200).json(addedQuiz);


}
const setAnswer = async (req: Request, res: Response) => {
    questionBankModel.findByIdAndUpdate(req.body.id,{Answer: req.body.Answer}, function(err, result){

        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }

    })
    
};


export {setAnswer,createQuestion, getQuiz,getCourseQuizzes,createQuiz};