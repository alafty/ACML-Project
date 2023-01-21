import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import courseServices from "../../app/CoursesServices";
import SearchAppBar from "../../components/searchAppBar";
import { extractIdFromVideoUrl } from "../../utils/video_utils";
import  Divider  from "@mui/material/Divider";
import CourseDetailsCenter from "../../components/Course/CourseDetailsCenter";
import instructorServices from '../../app/InstructorServices'
import InstructorCard from "../../components/InstructorCard";
import PriceCard from "../../components/PriceCard";
import CourseDetailsSubtitles from "../../components/Course/CourseDetailsSubtitles";
import { useGlobalState } from "../../App";
import LoggedInBar from "../../components/loggeedInAppBar";
import httpClient from "../../utils/httpClient";
import { getTokenHeader } from "../../utils/authUtils";

export default function CourseDetails() {
  const { id } = useParams();
  //const [quizzes, setQuizzes] = useState(null);
  const [courseDetails, setCourseDetails] = useState(null);
  const [instructorDetails, setInstructorDetails] = useState(null);
  //const [videoStatusText, setVideoStatusText] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  //const [discountStatusText, setDiscountStatusText] = useState("");
  const [discountDuration, setDiscountDuration] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [state, dispatch] = useGlobalState();
  const [isPurchased, setPurchased] = useState(false);

  

  useEffect(() => {
    const fetchCourseDetails = async () =>{
      await courseServices.getCourseDetails(id).then((data) => {
        setCourseDetails(data);
      }); 
      //courseServices.getCourseQuizzes(id).then((data) => setQuizzes(data));
    }
    const fetchInstructorDetails = async () => {
 
      await instructorServices.getInstructorData(courseDetails?.Instructor)
      .then((data) =>{
        setInstructorDetails(data);
      })
      .catch((Error) => {
       // console.log(Error);
        
      });
    
    }
    const isCoursePurchased = async () => {
      var config = {
        method: "get",
        url: "/create/me",
        headers: {
         ...getTokenHeader(), 
        },
        data: null,
      };
      httpClient(config)
      .then(function (response) {
        state.loggedInUser = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
      //console.log(courseDetails._id);
      if(state.loggedInUser.Username){
       var pur = false ;
        for (let i = 0 ; i<state.loggedInUser.PurchasedCourses.length;i++){
          console.log(state.loggedInUser.PurchasedCourses[i].courseID);
          console.log(state.loggedInUser.PurchasedCourses);
          if (state.loggedInUser.PurchasedCourses[i].courseID.includes(id.trim())){
            pur=true;
            break;
          }
        }
        setPurchased(pur);
        console.log(isPurchased);
      }
    } 
    fetchCourseDetails();
    fetchInstructorDetails();
    isCoursePurchased();
    
    
  }, []);

  

  return (
    <div className="container">
      {
        state.loggedInUser.Username ? 
        <LoggedInBar default='/home' />
        :
        <SearchAppBar page={0}/>
      }
      <div className="course-details-body" style={{display: 'flex', flexDirection: 'row'}}>
      {/* {id} */}
        <div style={{width: '30%'}}>
            <InstructorCard instructorDetails={instructorDetails}/>
            <PriceCard 
            userDetails={state.loggedInUser}
            courseDetails={courseDetails} 
            courseID = {id}
            isPurchased={isPurchased} 
            type={state.loggedInUser.type} 
            />

            <Divider variant= "fullWidth"/>
        </div>
        <div>
          <CourseDetailsCenter courseDetails={courseDetails} isPurchased={isPurchased} />
          <CourseDetailsSubtitles courseDetails={courseDetails} />
        
        </div>
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
