import { Request, Response } from "express";
import questionBankModel from "../Models/questionBank";

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
const createQuestion = async (req: Request, res: Response) => {
    questionBankModel.create(req.body);
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


export {setAnswer,createQuestion, getQuiz};