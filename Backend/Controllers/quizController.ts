import { Request, Response } from "express";
import questionBankModel from "../Models/questionBank";
import quiz from "../Models/quiz";
import quizInputValidate from "../Validators/quizValidator";



const createQuiz= async (req: Request, res: Response) => {
  const inputValid = quizInputValidate(
    {
      Count: true,
    },
    req
  );
  if (!inputValid) {
    res.status(400).json({ message: "Make sure all fields are here" });
  } else {
    const newQuiz = await quiz.create(req.body);
    res.status(200).json(newQuiz);
  }
}

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
    const q = await quiz.findOneAndUpdate(req.body.id);
    const question = await questionBankModel.create(req.body);
    q?.Questions.push(question);
    q?.save(function (err) {
      if (err) {
        res.status(400).json({ message: err });
        return;
      }
      res.status(200).json(question);
      })

    for(var i=0; i<q?.Questions.length!; i++)
    {
      console.log('hey brother');
      console.log(q?.Questions.at(i));
    }
    res.status(200).json({ message: "QuestionCreate" });
    
};
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




export {createQuiz , setAnswer , createQuestion, getQuiz , getCourseQuizzes};