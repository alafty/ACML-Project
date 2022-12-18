import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import courseServices from "../../app/CoursesServices";
import CourseVideo from "../../components/Course/CourseVideo";

export default function CourseDetails() {
  const { id } = useParams();

  const [courseDetails, setCourseDetails] = useState(null);
  useEffect(() => {
    courseServices.getCourseDetails(id).then((data) => {
      setCourseDetails(data);
    });
  });

  ///TODOLIST
  //Course name
  //Course subject
  //Course video preview
  //Course instructor
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
      <CourseVideo embedId={courseDetails?.VideoId}/>
      <p>{courseDetails?.Price}</p>
      <p>{courseDetails?.Instructor}</p>
      <p>{courseDetails?.TotalHours}</p>
    </div>
  );
}
