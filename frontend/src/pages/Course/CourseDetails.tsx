import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import courseServices from "../../app/CoursesServices";
import CourseVideo from "../../components/Course/CourseVideo";
import SearchAppBar from "../../components/searchAppBar";
import { extractIdFromVideoUrl } from "../../utils/video_utils";
import  Divider  from "@mui/material/Divider";
import { width } from "@mui/system";
import { Button } from "@mui/material";
import e from "express";

export default function CourseDetails() {
  const { id } = useParams();
  const [quizzes, setQuizzes] = useState(null);
  const [courseDetails, setCourseDetails] = useState(null);
  const [videoStatusText, setVideoStatusText] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [discountStatusText, setDiscountStatusText] = useState("");
  const [discountDuration, setDiscountDuration] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");

  useEffect(() => {
    courseServices.getCourseDetails(id).then((data) => {
      setCourseDetails(data);
    });
    courseServices.getCourseQuizzes(id).then((data) => setQuizzes(data));
  }, []);

  const handleUrlUpload = async () => {
    try {
      const vidId = extractIdFromVideoUrl(videoUrl);
      courseServices.uploadCourseVideo(id, vidId).then((data) => {
        if (data) {
          var newCourse = courseDetails;
          newCourse.VideoId = vidId;
          setVideoStatusText("Success!");
          setCourseDetails(newCourse);
          setVideoUrl('');
        } else {
          setVideoStatusText("Try again");
        }
      });
    } catch {
      setVideoStatusText("Make sure url is valid");
    }
  };

  const handleDurationAdding = async () => {
    try {
      const duration = Number.parseInt(discountDuration);
      const percentage = Number.parseInt(discountPercentage);
      console.log('wee');
      
      courseServices.addCourseDiscount(id, duration, percentage).then((data) => {
        if (data) {
          var newCourse = courseDetails;
          newCourse.Discounts.push(data);
          setDiscountStatusText("Success!");
          setCourseDetails(newCourse);
          setDiscountDuration('');
          setDiscountPercentage('')
        } else {
          setDiscountStatusText("Try again");
        }
      });
    } catch {
      setDiscountStatusText("Make sure discount is valid");
    }
  };

  const handleSubtitle = ({_id, Description}) =>{
    return(
      <div className='course-details-subtitle'>
        <p className="course-details-subtitle-header"> Subsection {_id}</p>
        <p className="course-details-subtitle-description">{Description}</p>
      </div>
    )
  };

  ///TODOLIST
  //Course name
  //Course subject
  //Course video preview
  //Course instructors
  //Course price
  //Course hours
  //List of subtitles
  //Each subtitle would go to the subtitle page
  //Subtitle page has video, description and the quiz
  //Price should be rendered with descount depending on country
  //Course details page as 3 different styles. Non-purchaser, purchaser and instructor

  return (
    <div className="container">
      <SearchAppBar page={0}/>
      <div className="body" style={{display: 'flex', flexDirection: 'row'}}>
      {/* {id} */}
      <div style={{width: '70%'}}>
      <CourseVideo embedId={courseDetails?.VideoId} />
      <p className="course-details-title">{courseDetails?.Name}</p>
      <p className="course-details-description">WE NEED A COURSE DESCRIPTION{courseDetails?.Description}</p>
      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <p className="course-details-rating"> Rating: {courseDetails?.RatingAvg}/5</p>
        <p className="course-details-rating-count">({courseDetails?.RatingCount} Students)</p>
      </div>
      <p className="course-details-rating"> Total Hours: {courseDetails?.TotalHours}</p>
      <Divider variant= "middle" />
      {/* <p>{JSON.stringify(courseDetails?.Discounts)}</p> */}
      {/* <p>{JSON.stringify(courseDetails?.Subtitles)}</p> */}
      {/* <p>{JSON.stringify(quizzes)}</p> */}
      {/* <input
        type="text"
        placeholder="VideoURL upload"
        name="VideoURL"
        onChange={(e) => setVideoUrl(e.target.value)}
        value={videoUrl}
        required
      />
      <button type="submit" onClick={handleUrlUpload}>
        Upload url
      </button>
      <p>{videoStatusText}</p>
      <input
        type="text"
        placeholder="Specify Discount Duration"
        name="Discount Duration"
        onChange={(e) => setDiscountDuration(e.target.value)}
        value={discountDuration}
        required
      />

      <input
        type="text"
        placeholder="Specify Discount Percentage"
        name="Discount Percentage"
        onChange={(e) => setDiscountPercentage(e.target.value)}
        value={discountPercentage}
        required
      />  
      <button type="submit" onClick={handleDurationAdding}>
        Add Discount
      </button>
      <p>{videoStatusText}</p> */}
      </div>
      <div style={{width: '30%'}}>
        <div className="course-details-instructor-info">
          <p className="course-details-instructor-header" style={{paddingTop: '4%'}}>About the instructor</p>
          <img src={require('../../assets/engineering.jpg')} height="40%" style={{padding: '5%', borderRadius: '20' }} />
          <p className="course-details-instructor-name">{courseDetails?.Instructor}</p>
          <p className="course-details-instructor-bio"> WE NEED INSTRUCTOR'S DETAILS {courseDetails?.Instructor}</p>
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <p className="course-details-instructor-rating"> Rating: 4.6/5{courseDetails?.Instructor}</p>
            <p className="course-details-instructor-rating-count"> (9826 Students){courseDetails?.Instructor}</p>
          </div>
        </div>
        <div style={{display: 'flex', backgroundColor: "#bae7e4", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingBottom:"13px" }}>
          <p className="course-details-price" > Price: {courseDetails?.Price} EGP </p>
          <Button variant= "contained" id="big-button-primary"> Purchase Course</Button>        
        </div>
        <Divider variant= "fullWidth"/>
      </div>
      </div>
      <div style={{marginBottom: '40px'}}>
        <p className="course-details-title" style={{marginTop: '0px'}}> Course Details </p>
        {courseDetails?.Subtitles.map(handleSubtitle)}
      </div>
    </div>
  );
}
