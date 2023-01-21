import { Button, Divider, LinearProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalState } from "../App";
import CoursesServices from "../app/CoursesServices";
import LoggedInBar from "../components/loggeedInAppBar";
import { useNavigate } from "react-router-dom";
import SearchAppBar from "../components/searchAppBar";

export default function SearchPage() {
  const { term } = useParams();
  const [courses, setCourses] = useState([]);
  const [state, dispatch] = useGlobalState();
  const [searching, setSearching] = useState(false);
  const navigation = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      setSearching(true);
      const data = await CoursesServices.searchCourses(term);
      setSearching(false);
      let filteredCourses = data;
      setCourses(filteredCourses);
    };
    fetchCourses();
  }, [term]);

  const renderCourses = ({ Name, Description, _id }) => {
    return (
      <div className="course-card-dashboard">
        <p className="course-name">{Name}</p>
        <p className="course-description"> {Description} </p>
        <Button
          variant="contained"
          id="big-button-primary"
          onClick={async () => {
            navigation(`/course=${_id}`);
          }}
        >
          {" "}
          View Course{" "}
        </Button>
      </div>
    );
  };

  return (
    <div className="container">
      <SearchAppBar page="0" default="/home" />
      <div className="body" style={{backgroundColor: "var(--text-dark)"}}>
        <p className="home-header" style={{backgroundColor: "var(--text)"}}> Searching for {term}</p>
        {}

        {!searching ? (
          courses.length != 0 ? (
            <div className="grid-container">{courses.map(renderCourses)}</div>
          ) : (
            <h2 className="dashboard-header"> No Results Found </h2>
          )
        ) : (
          <>
            <LinearProgress className="landing-progress" />
          </>
        )}
      </div>
    </div>
  );
}
