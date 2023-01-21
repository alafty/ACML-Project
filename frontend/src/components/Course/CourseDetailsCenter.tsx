import React, { useEffect, useState } from "react";
import "../../Styling/mainLayout.css";
import CourseVideo from "./CourseVideo";
import Divider from "@mui/material/Divider";
import { Rating } from "@mui/material";
import { rateCourse } from "../../app/CoursesServices";

function CourseDetailsCenter(props) {
  const [rating, setRating] = useState(0);
  const [sentRating, setSentRating] = useState(false);

  useEffect(() => {
    setRating(props.courseDetails?.RatingAvg);
    console.log(props.isPurchased);
    
  }, []);

  const onRating = async () => {
    await rateCourse(props.courseDetails._id, rating.toString());
    setSentRating(true);
  };

  return (
    <div style={{ width: "97%" }}>
      <CourseVideo embedId={props.courseDetails?.VideoId} />
      <div className="course-details-card">
        <p className="course-details-title">{props.courseDetails?.Name}</p>
        <p className="course-details-description">
          {props.courseDetails?.Description}
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <p className="course-details-rating">
            {" "}
            Rating: {props.courseDetails?.RatingAvg}/5
          </p>
          <p className="course-details-rating-count">
            ({props.courseDetails?.RatingCount} Students)
          </p>
        </div>
        <div>
          <Rating
            name={props.isPurchased ? "simple-controlled" : "read-only"}
            value={rating}
            readOnly={!props.isPurchased}
            onChange={(event, newValue) => {
              setRating(newValue);
              onRating();
            }}
          />
          {sentRating ? 'Thanks for rating!' : <></>}
        </div>
        <p className="course-details-hours">
          {" "}
          Total Hours: {props.courseDetails?.TotalHours}
        </p>
      </div>
      <Divider variant="middle" />
    </div>
  );
}

export default CourseDetailsCenter;
