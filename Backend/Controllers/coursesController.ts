import { Request, Response } from "express";
import Course from "../Models/course";
import courseInputValidate from "../Validators/courseValidator";
import Subtitle from "../Models/subtitle";
import coursesRouter from "../Routes/coursesRoutes";
import discountInputValidate from "../Validators/discountValidator";
import userTypes from "../Constants/userTypes";
import inidvTrainee from "../Models/individualTrainee";
import course from "../Models/course";
import instructor from "../Models/instructor";


// @desc    Get All Courses
// @rout    GET /courses/
// @access  private
const getCourses = async (req: Request, res: Response) => {
  if (courseInputValidate({ id: true }, req)) {
    const result = await Course.findById(req.body.id);
    if (!result) {
      res.status(400).json({ message: "Please enter a valid course id" });
      return;
    }
    res.status(200).json(result);
  } else if (courseInputValidate({ id: false }, req)) {
    const result = await Course.find();
    res.send(result);
  }
};

const hoverCourse = async (req: Request, res: Response) => {
  if (courseInputValidate({ id: true }, req)) {
    const result = await Course.findById(req.body.id, {
      Subtitles: 1,
      Name: 1,
      Subject: 1,
      Exercises: 1,
      TotalHours: 1,
      Price: 1,
      Discount: 1,
    });

    res.status(200).json(result);
  }
};

// @desc    Search Courses By Subject
// @rout    POST /courses/search/:subje
// @access  public
const searchCourses = (req: Request, res: Response) => {
  Course.find(
    {
      $or: [
        { Subject: req.body.searchTerm },
        { Instructor: req.body.searchTerm },
        { Name: req.body.searchTerm },
      ],
    },
    function (err: any, data: any) {
      if (err) {
        console.log(err);
      } else {
        res.send(data);
      }
    }
  );
};

// @desc    Add a New Course
// @rout    POST /courses
// @access  private
const addCourse = async (req: Request, res: Response) => {
  const inputValid = courseInputValidate(
    {
      id: false,
      Name: true,
      Subject: true,
      Price: true,
      TotalHours: true,
    },
    req
  );
  if (!inputValid) {
    res.status(400).json({ message: "Make sure all fields are here" });
  } else {
    var newBody = req.body;
    // if (req.type == userTypes.instructor) {
    //   newBody.Instructor = req.user._id;
    // } else if (req.type != userTypes.admin) {
    //   res.status(401).json({ message: "Not authorized" });
    //   return;
    // }
    const newCourse = await Course.create(newBody);
    const tempInstructor = await instructor.findById(newCourse.Instructor);
    console.log(tempInstructor);
    tempInstructor.NumberOfCourses ++;
    tempInstructor.Courses.push(newCourse._id);
    console.log(tempInstructor);
    await instructor.findByIdAndUpdate(newCourse.Instructor, 
      {NumberOfCourses: tempInstructor.NumberOfCourses, 
      Courses: tempInstructor.Courses
      });
    res.status(200).json(newCourse);
  }
};

// @desc    Remove a Course
// @rout    DELETE /courses/:id
// @access  private
const deleteCourse = async (req: Request, res: Response) => {
  if (!req.body) {
    res.status(400);
  } else {
    if (
      courseInputValidate(
        {
          id: true,
        },
        req
      )
    ) {
      var c = await Course.findById(req.params.id);
      if (protectCourseOperations(req, c)) {
        c.delete();
        res.status(200).json({ ok: true });
      } else {
        res.status(401).json({ message: "Not authorized" });
        return;
      }
    }
  }
};

const protectCourseOperations = (
  req: Request,
  course: typeof Course.schema.obj
): boolean => {
  return (
    req.type == userTypes.admin ||
    (req.type == userTypes.instructor && course.Instructor != req.user._id)
  );
};

const addRating = async (req: Request, res: Response) => {
  if (!req.body.rating || !courseInputValidate({ id: true }, req)) {
    res.status(400);
  } else {
    if (
      !(
        req.type == userTypes.corporateTrainee ||
        req.type == userTypes.individualTrainee
      )
    ) {
      res.status(401).json({ message: "Not authorized" });
      return;
    }
    var mult = 0;
    const courseID = req.body.id;
    const ratingResult = await Course.findById(courseID);

    if (ratingResult != null) {
      mult = ratingResult.RatingCount * ratingResult.RatingAvg;
      ratingResult.RatingAvg =
        (mult + parseFloat(req.body.rating)) / (ratingResult.RatingCount + 1);
      ratingResult.RatingCount++;
      await Course.findByIdAndUpdate(courseID, {
        RatingAvg: ratingResult.RatingAvg,
      });
      await Course.findByIdAndUpdate(courseID, {
        RatingCount: ratingResult.RatingCount,
      });
      res.status(200).json({ message: "rating added" });
    } else {
      res.status(404).json({ message: "no such course exists" });
    }
  }
};

// @desc    Add a Course Subtitle or Modify one
// @rout    Put /course-subtitle
// @access  private
/// @body   {id, {[id], VideoLink, Description}}

const putCourseSubtitle = async (req: Request, res: Response) => {
  if (courseInputValidate({ id: true }, req)) {
    var course = await Course.findById(req.body.id);
    var sub = req.body.Subtitle;
    if (!sub) {
      res.status(400).json({
        message:
          'Subtitle not found in request. Make sure body has "Subtitle" key',
      });
    }
    if (!protectCourseOperations(req, course)) {
      res.status(401).json({ message: "Not authorized" });
      return;
    }
    if (course) {
        var newSub = Subtitle.create({
          VideoId: sub.VideoId,
          Description: sub.Description,
          Order: sub.Order,
        });
        var createdSub = Subtitle.findOne({VideoId: sub.VideoId,
          Description: sub.Description,
          Order: sub.Order});
        course.Subtitles.push((await createdSub)._id);
        course.save(function (err) {
          if (err) {
            res.status(400).json({ message: err });
            return;
          }
          res.status(200).json(newSub);
        });
    } else {
      res
        .status(400)
        .json({ message: "Course not found. Make sure course id is valid" });
    }
  } else {
    res.status(400).json({ message: "Need to specify id for course" });
  }
};

const putCourseVideo = async (req: Request, res: Response) => {
  if (courseInputValidate({ id: true, VideoId: true }, req)) {
    var c = await Course.findByIdAndUpdate(req.body.id, {
      VideoId: req.body.VideoId,
    });
    if (!protectCourseOperations(req, c)) {
      res.status(401).json({ message: "Not authorized" });
      return;
    }
    if (!c) {
      res
        .status(400)
        .json({ message: "Course not found. Make sure course id is valid" });
      return;
    }
    res.status(200).json(await Course.findById(req.body.id));
  } else {
    res.status(400).json({ message: "Make sure all fields are valid" });
  }
};
const putDiscount = async (req: Request, res: Response) => {
  if (courseInputValidate({ id: true }, req)) {
    var c = await Course.findById(req.body.id);

    if (!protectCourseOperations(req, c)) {
      res.status(401).json({ message: "Not authorized" });
      return;
    }
    if (!c) {
      res
        .status(400)
        .json({ message: "Course not found. Make sure course id is valid" });
      return;
    }
    var discount = req.body.Discount;
    if (!discount) {
      res
        .status(400)
        .json({ message: "Make sure Discount is present in the body" });
      return;
    }
    if (
      !discountInputValidate({ Duration: true, Percentage: true }, discount)
    ) {
      res.status(400).json({
        message:
          "Make sure Discount duration and percentage are properly specified in body",
      });
      return;
    }
    var newDiscount = c.Discounts.create({
      Duration: discount?.Duration,
      Percentage: discount?.Percentage,
    });

    c.Discounts.push(newDiscount);
    c.save(function (err) {
      if (err) {
        res.status(400).json({ message: err });
        return;
      }
      res.status(200).json(newDiscount);
    });
  } 
};

const putDiscountAllCourses = async (req: Request, res: Response) => {
    
     if ( req.type != userTypes.admin) {
      res.status(401).json({ message: req.type });
      return;
     }
    var c = await Course.find();
    
    if (!c) {
      console.log("herwwwwe")
      res
        .status(400)

        
        .json({ message: "No courses Available " });
      return;
    }
  
    if (
    ( !req.body.Duration ||!req.body.Percentage)
    ) {
      console.log("here");
      res.status(400).json({
        message:
          "Make sure Discount duration and percentage are properly specified in body",
      });
      return;
    }
    c.forEach(function (i){
    var newDiscount = i.Discounts.create({
      Duration: req.body.Duration,
      Percentage: req.body.Percentage,
    });
    i.Discounts.push(newDiscount);
    i.save(function (err) {
      if (err) {
        res.status(400).json({ message: err });
        return;
      }
      res.status(200).json(newDiscount);
    });
  });

};

const recommendedCourses = async (req: Request, res: Response) => {
  var allCourses = await Course.find();
  allCourses.sort((course1, course2) => {
    return course2.PurchaseCount - course1.PurchaseCount;
  });
  res.status(200).json(allCourses);
};

const purchaseCourse = async (req, res) => {
 
var trainee=  await inidvTrainee.findOne({_id : req.body._id});
var theCourse = await course.findOne({_id : req.body.courseID});
const newCourse = {
  courseID : req.body.courseID,
  progress : 0
}
trainee.PurchasedCourses.push(newCourse);
trainee.save(function (err) {
  if (err) {
    res.status(400).json({ message: err });
    return;
  }
  res.status(200).json(trainee.PurchasedCourses);
});
theCourse.PurchaseCount++;
theCourse.save();
//const courses = trainee.PurchasedCourses;
//courses.push((req.body.courseID,0));
//await inidvTrainee.updateOne({_id : req.body._id}, {PurchasedCourses : courses});
//res.status(200).json("Course purchased successfully");
    }


export {
  getCourses,
  searchCourses,
  addCourse,
  hoverCourse,
  addRating,
  deleteCourse,
  putCourseSubtitle,
  putCourseVideo,
  putDiscount,
  putDiscountAllCourses,
  recommendedCourses,
  purchaseCourse
};
