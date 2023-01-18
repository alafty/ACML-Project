import axios from "axios";
import { response } from "express";
import e from "express";
import { useState } from "react";
import qs from "qs";
import httpClient from "../utils/httpClient";
import { getTokenHeader } from "../utils/authUtils";
import { useGlobalState } from "../App";

const COURSES_URL = "/courses";

export const getAllCourses = async () => {
  const response = await httpClient.get(COURSES_URL);

  if (response.data) {
    return response.data;
  }

  return {};
};

export const getRecommendedCourses = async () => {
  const response = await httpClient.get(`${COURSES_URL}/recommended`);
  const courseList = [];
  if (response.data) {
    return response.data;
  }

  return {};
};

export const searchCourses = async (searchTerm: String) => {
  var data = qs.stringify({
    searchTerm: searchTerm,
  });
  var config = {
    method: "post",
    url: `${COURSES_URL}/search`,
    data: data,
  };
  try {
    const response = await httpClient(config);
    if (response.data) {
      return response.data;
    } else {
      return {};
    }
  } catch (error) {
    console.log(error);
    return {};
  }
};

const getCourseDetails = async (id: string) => {
  var data = qs.stringify({
    id: id,
  });

  const response = await httpClient.post(`${COURSES_URL}/id`, data);

  return response.data;
};

const getCourseQuizzes = async (Course: string) => {
  var data = qs.stringify( {
    _id: Course,
  });
  const response = await httpClient.post("http://localhost:8000/quiz/getCourseQuizzes", data);

  return response.data;
};

const createCourse = async (
  name: String,
  subject: String,
  instructor: String,
  price: String,
  totalHours: String,
  vidID: String,
  description: String,
  quizzes: any[],
  Subtitles: any[]
) => {
  var data = qs.stringify({
    Name: name,
    Subject: subject,
    Instructor: instructor,
    Price: price,
    TotalHours: totalHours,
    VideoId: vidID,
    Description: description,
    Quizzes: quizzes,
    Subtitles: Subtitles,
  });
  var config = {
    method: "post",
    url: "http://localhost:8000/courses/",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

const changeProgress = async (
  courseID: string,
  userID: string,
  progress: number
) => {

var data = qs.stringify({
  'id': userID,
  'courseID': courseID,
  'progress': progress 
});
var config = {
  method: 'put',
  url: 'http://localhost:8000/courses/progress',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded', 
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

}
const createSubtitle = async (
  courseId: string,
  videoId: string,
  description: string,
  order: String
) => {
  var data = qs.stringify({
    id: courseId,
    VideoId: videoId,
    Description: description,
    Order: order,
  });
  var response = await httpClient.put(`${COURSES_URL}/subtitle`, data);

  if (response.status == 200) {
    return "success";
  } else {
    return response.data;
  }
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

export const rateCourse = async (courseID: String, rating: String) => {
  var data = qs.stringify({
    id: courseID,
    rating: rating,
  });
  var config = {
    method: "post",
    url: "/courses/rate",
    headers: {
      ...getTokenHeader(),
    },
    data: data,
  };
  try {
    const response = await httpClient(config);
    if (response.data) {
      return response.data;
    } else {
      return {};
    }
  } catch (error) {
    console.log(error);
    return {};
  }
};
export const BuyCourse = async (courseID: String) => {
  var data = qs.stringify({
    courseID: courseID.trim(),
  });
  var config = {
    method: "put",
    url: "/courses/payCourse",
    headers: {
      ...getTokenHeader(),
    },
    data: data,
  };

  httpClient(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  const [state, dispatch] = useGlobalState();
  var config = {
    method: "get",
    url: "/create/me",
    headers: {
      ...getTokenHeader(),
    },
    data: data,
  };
  httpClient(config)
    .then(function (response) {
      state.loggedInUser = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};
const CoursesServices = {
  getAllCourses,
  searchCourses,
  rateCourses: rateCourse,
  getCourseDetails,
  getCourseQuizzes,
  updateSubtitle,
  uploadCourseVideo,
  addCourseDiscount,
  getRecommendedCourses,
  createCourse,
  createSubtitle,
  changeProgress,
  BuyCourse
};

export default CoursesServices;
