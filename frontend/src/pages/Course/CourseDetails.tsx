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
import CourseDetailsCenter from "../../components/Course/CourseDetailsCenter";
import instructorServices from '../../app/InstructorServices'
import InstructorCard from "../../components/InstructorCard";
import PriceCard from "../../components/PriceCard";

export default function CourseDetails() {
  const { id } = useParams();
  const [quizzes, setQuizzes] = useState(null);
  const [courseDetails, setCourseDetails] = useState(null);
  const [instructorDetails, setInstructorDetails] = useState(null);
  const [videoStatusText, setVideoStatusText] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [discountStatusText, setDiscountStatusText] = useState("");
  const [discountDuration, setDiscountDuration] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");

  useEffect(() => {
    const fetchCourseDetails = async () =>{
      await courseServices.getCourseDetails(id).then((data) => {
        setCourseDetails(data);
      }); 
      courseServices.getCourseQuizzes(id).then((data) => setQuizzes(data));
    }
    const fetchInstructorDetails = async () => {
      await instructorServices.getInstructorData(courseDetails?.Instructor)
      .then((data) =>{
        setInstructorDetails(data);
      })
    }
    fetchCourseDetails();
    fetchInstructorDetails();
    
  }, [courseDetails]);

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
      <div className="course-details-body" style={{display: 'flex', flexDirection: 'row'}}>
      {/* {id} */}
      <CourseDetailsCenter courseDetails={courseDetails} />
      <div style={{width: '30%'}}>
        <InstructorCard instructorDetails={instructorDetails}/>
        <PriceCard courseDetails={courseDetails}/>
        <PriceCard courseDetails={courseDetails} />
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
