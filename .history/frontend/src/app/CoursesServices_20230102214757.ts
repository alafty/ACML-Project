import axios from "axios";
import qs from "qs";
import { useState } from "react";
import httpClient from "../utils/httpClient";

const COURSES_URL = "/courses";
export const getAllCourses = async () => {
  const response = await httpClient.get(COURSES_URL);
  console.log(JSON.stringify(response));

  if (response.data) {
    localStorage.setItem("AllCourses", JSON.stringify(response.data));
  } else {
    localStorage.setItem("AllCourses", "Nothing Found");
  }
  return response.data;
};


const getCourseDetails = async (id: string) => {
  var data = qs.stringify({
    id: id,
  });

  const response = await httpClient.post(`${COURSES_URL}/id`, data);

  return response.data;
};
const getCourseQuizzes = async (Course: string) => {
  const Body = {
    CourseID: Course,
  };
  const data: [String] = [""];
  await axios.post("http://localhost:8000/quiz/getCourseQuizzes", Body);
  return data;
};

const updateSubtitle = async (
  courseId: string,
  subId: string,
  options: { videoId?: string; description?: string }
) => {
  var data = qs.stringify({
    id: courseId,
    Subtitle: {
      Id: subId,
      ...(options.videoId ? { VideoId: options.videoId } : {}),
      ...(options.description ? { Description: options.description } : {}),
    },
  });
  var response = await httpClient.put(`${COURSES_URL}/subtitle`, data);

  return response.data;
};

const uploadCourseVideo = async (id: string, videoId: string) => {
  var data = qs.stringify({
    id: id,
    VideoId: videoId,
  });
  var response = await httpClient.put(`${COURSES_URL}/videoId`, data);

  return response.data;
};

const addCourseDiscount = async (
  courseId: string,
  duration: Number,
  percentage: Number
) => {
  var data = qs.stringify({
    id: courseId,
    Discount: {
      Duration: duration,
      Percentage: percentage,
    },
  });

  const response = await httpClient.put(`${COURSES_URL}/discount`, data);
  return response.data;
};

export const rateCourses = async (courseID: String, rating: String) => {
  var data = qs.stringify({
  id: courseID,
  rating: rating
});
  var config = {
  method: 'post',
  url: 'http://localhost:8000/courses/rate',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded', 
    'Cookie': 'userData=j%3A%7B%22Country%22%3A%22Egypt%22%7D'
  },
  data : data
};

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      if (response.data) {
        localStorage.setItem("rateCourse", JSON.stringify(response.data));
      } else {
        localStorage.setItem("rateCourse", "Nothing Found");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

const Services = {
  getAllCourses,
  searchCourseBySubject,
  rateCourses,
  getCourseDetails,
  getCourseQuizzes,
  updateSubtitle,
  uploadCourseVideo,
  addCourseDiscount
};

export default Services;
