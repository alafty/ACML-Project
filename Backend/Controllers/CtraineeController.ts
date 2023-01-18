import { Request, Response, NextFunction } from "express";
import request from "../Models/request";
import corpTrainee from "../Models/corporateTrainee";
import course from "../Models/course";


const viewMyCourses2 = async (req: Request, res: Response) => {
    var trainee = await corpTrainee.findOne({_id:req.body._id});
    var purchasedcourses = trainee.PurchasedCourses;
    var courses=[];
    for (let i=0 ;i<purchasedcourses.length;i++) {
        var courseID= purchasedcourses[i].courseID;
        var Course = await course.findOne({_id :courseID})
        courses.push(Course);

    }
    res.status(200).json(courses);
}

export {
    viewMyCourses2
}