import React from "react";
import { useState, useEffect } from "react";
import "../Styling/mainLayout.css";
import "../Styling/dashboardLayout.css";
import { useGlobalState } from "../App";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import { CustomTextField } from "../components/TextField";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CorporateServices from "../app/CorporateServices";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import Services from "../app/RequestsServices";
import UserServices from "../app/UsersServices";
import Grid from "@mui/system/Unstable_Grid";
import { Card, CardContent, CardHeader, Paper } from "@mui/material";
import CoursesSector from "../components/coursesSector";
import TraineeServices from "../app/TraineeServices";

///TABS:
/// - my courses => progression
/// - my profile
/// - my wallet
/// - reported problems

var traineeProfileTabs = {
  courses: "courses",
  profile: "profile",
  wallet: "wallet",
  problems: "problems",
};

function TraineeProfile() {
  const [state, dispatch] = useGlobalState();
  const [activeTab, setActiveTab] = useState(traineeProfileTabs.profile);
  const navigation = useNavigate();

  const [problems, setProblems] = useState([]);

  useEffect(() => {
    UserServices.me().then((data) => {
      state.loggedInUser = data.data;
    });

    TraineeServices.getMyProblems().then((data) => {
      setProblems(data);
    });
  }, []);

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

  const renderProblems = ({
    CourseName,
    Description,
    Type,
    Status,
  }: {
    CourseName: String;
    Description: String;
    Type: String;
    Status: String;
  }) => {
    return (
      <Grid xs={8}>
        <Card variant="outlined" style={{ backgroundColor: "var(--text)" }}>
          {" "}
          <CardContent>
            <Typography
              variant="body1"
              fontFamily={"var(--font)"}
              color="var(--white)"
            >
              {CourseName}
            </Typography>
            <Typography
              variant="body2"
              fontFamily={"var(--font)"}
              color="var(--white)"
            >
              {Description}
            </Typography>
          </CardContent>{" "}
          <CardHeader
            title={Type}
            subheader={Status}
            subheaderTypographyProps={{ color: "white" }}
            style={{ color: "var(--white)" }}
          />{" "}
        </Card>{" "}
      </Grid>
    );
  };

  return (
    <div className="container">
      {state.loggedInUser.type === "individualTrainee" ||
      state.loggedInUser.type === "corporateTrainee" ? (
        <div className="dashboard-body">
          <div className="dashboard-side-bar">
            <div>
              <p className="side-bar-header">Dashboard</p>
              <Divider variant="middle" />

              <Button
                id="side-bar-button"
                onClick={async () => {
                  setActiveTab(traineeProfileTabs.profile);
                }}
              >
                {" "}
                Profile{" "}
              </Button>
              <Divider variant="middle" />

              <Button
                id="side-bar-button"
                onClick={() => {
                  setActiveTab(traineeProfileTabs.courses);
                }}
              >
                {" "}
                My Courses{" "}
              </Button>
              <Divider variant="middle" />

              <Button
                id="side-bar-button"
                onClick={() => {
                  setActiveTab(traineeProfileTabs.wallet);
                }}
              >
                {" "}
                Wallet{" "}
              </Button>
              <Divider variant="middle" />

              <Button
                id="side-bar-button"
                onClick={() => {
                  setActiveTab(traineeProfileTabs.problems);
                }}
              >
                {" "}
                Reported Problems{" "}
              </Button>
              <Divider variant="middle" />
            </div>
            <div>
              <Divider variant="middle" />
              <Button
                id="side-bar-button"
                onClick={() => {
                  UserServices.logout();
                  navigation("/");
                }}
              >
                {" "}
                Logout{" "}
              </Button>
            </div>
          </div>
          <div>
            <div>
              {activeTab == traineeProfileTabs.profile ? (
                <div className="dashboard-main-card">
                  <p className="dashboard-header"> Profile </p>
                  <p className="profile-items">
                    {" "}
                    Name: {state.loggedInUser.Username}
                  </p>
                  <p className="profile-items">
                    Email: {state.loggedInUser.Email}
                  </p>
                  <p className="profile-items">
                    {state.loggedInUser.Corporate ? (
                      <p> Corporate {state.loggedInUser.Corporate}</p>
                    ) : (
                      <></>
                    )}
                  </p>
                </div>
              ) : activeTab == traineeProfileTabs.courses ? (
                <div className="dashboard-courses-card">
                  <p className="dashboard-header"> My Courses </p>
                  <div className="grid-container">
                    {state.loggedInUser.PurchasedCourses.length != 0 ? (
                      state.loggedInUser.PurchasedCourses.map(renderCourses)
                    ) : (
                      <p className="profile-items">No Courses Yet</p>
                    )}
                  </div>
                </div>
              ) : activeTab == traineeProfileTabs.wallet ? (
                <div className="dashboard-package-card">
                  <h2 className="dashboard-header"> Wallet </h2>
                  <p className="profile-items">
                    Balance: ${state.loggedInUser.Wallet}
                  </p>
                </div>
              ) : activeTab == traineeProfileTabs.problems ? (
                <div className="dashboard-package-card">
                  <h2 className="dashboard-header"> Reported Problems </h2>
                  {problems.length != 0 ? (
                    <Grid container spacing={2} columns={16}>
                      {problems.map(renderProblems)}
                    </Grid>
                  ) : (
                    <p className="profile-items">
                      Enjoy the moment with no problems
                    </p>
                  )}
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      ) : (
        <p> Error 401: Unauthorized Access</p>
      )}
    </div>
  );
}

export default TraineeProfile;
