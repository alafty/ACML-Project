import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import courseServices from "../../app/CoursesServices";
import CourseVideo from "../../components/Course/CourseVideo";
import { extractIdFromVideoUrl } from "../../utils/video_utils";

export default function CourseDetails() {
  const { id } = useParams();
  const [quizzes, setQuizzes] = useState(null);
  const [courseDetails, setCourseDetails] = useState(null);
  const [videoStatusText, setVideoStatusText] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

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
      <CourseVideo embedId={courseDetails?.VideoId} />
      <p>{courseDetails?.Price}</p>
      <p>{courseDetails?.Instructor}</p>
      <p>{courseDetails?.TotalHours}</p>
      <p>{courseDetails?.Discount}</p>
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
      <button type="submit" onClick={handleUrlUpload}>
        Upload url
      </button>
      <p>{videoStatusText}</p>
    </div>
  );
}
