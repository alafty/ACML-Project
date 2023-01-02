import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import courseServices from "../../app/CoursesServices";

export default function CourseDetails() {
  const { id } = useParams();
  const [quizzes, setQuizzes] = useState(null);
  const [courseDetails, setCourseDetails] = useState(null);
  const [videoStatusText, setVideoStatusText] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [discountDuration, setDiscountDuration] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");

  useEffect(() => {
    courseServices.getCourseDetails(id).then((data) => {
      setCourseDetails(data);
    });
    courseServices.getCourseQuizzes(id).then((data) => setQuizzes(data));
  }, []);





  let navigate = useNavigate(); 
  const handleReportingProblem = () =>{ 
    let path = '/home'; 
    navigate(path);
  }

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
    <div>
      {/* {id} */}
      <p>{courseDetails?.Name}</p>
      <p>{courseDetails?.Subject}</p>
      <p>{courseDetails?.Price}</p>
      <p>{courseDetails?.Instructor}</p>
      <p>{courseDetails?.TotalHours}</p>
      <p>{JSON.stringify(courseDetails?.Discounts)}</p>
      <p>{[...(courseDetails?.Subtitles ?? [])]?.map((e) => `${e?._id} `)}</p>
      <p>{JSON.stringify(courseDetails?.Subtitles)}</p>
      <p>{JSON.stringify(quizzes)}</p>
      <input
        type="text"
        placeholder="VideoURL upload"
        name="VideoURL"
        onChange={(e) => setVideoUrl(e.target.value)}
        value={videoUrl}
        required
      />

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

      <div style={{float: 'right'}}>
        <button type= "submit" onClick={handleReportingProblem}>
              Report Problem
        </button>
        </div>
      <p>{videoStatusText}</p>
    </div>
  );
}
