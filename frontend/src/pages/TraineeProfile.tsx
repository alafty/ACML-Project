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
  const [isExpanded, setExpanded] = React.useState<String | false>("panel1");
  const [packageConfirmation, setPackageConfirmation] = useState("");

  const [traineeMail, setTraineeMail] = useState("");
  const [traineePassword, setTraineePassword] = useState("");
  const [traineeConfirm, setTraineeConfirm] = useState("");
  const [traineeName, setTraineeName] = useState("");
  const [traineeError, setTraineeError] = useState("");
  const [isTraineeSuccess, setTraineeSuccess] = useState(false);

  const [requests, setRequests] = useState(null);

  useEffect(() => {
    UserServices.me().then((data) => {
      state.loggedInUser = data.data;
    });
  }, []);

  const handleTrainee = (data: any, isError?: boolean) => {
    if (isError) {
      setTraineeError(data);
      setTraineeSuccess(false);
    } else {
      setTraineeError("Trainee Successfully Created");
      setTraineeSuccess(true);
    }
  };

  const handleAccordionChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
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
                  const reqs = await Services.fetchCorporateRequests(
                    state.loggedInUser._id
                  );
                  setRequests(reqs);

                  setPackageConfirmation("");
                  setTraineeError("");
                  setTraineeSuccess(false);
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
                  setPackageConfirmation("");
                  setTraineeError("");
                  setTraineeSuccess(false);
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
                  setPackageConfirmation("");
                  setTraineeError("");
                  setTraineeSuccess(false);
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
                  setPackageConfirmation("");
                  setTraineeError("");
                  setTraineeSuccess(false);
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
                  <p> Email: {state.loggedInUser.Email} </p>
                  <p> Username: {state.loggedInUser.Username}</p>
                  {state.loggedInUser.Corporate ? (
                    <p> Corporate {state.loggedInUser.Corporate}</p>
                  ) : (
                    <></>
                  )}
                </div>
              ) : activeTab == traineeProfileTabs.courses ? (
                <div className="dashboard-main-card">
                  <p className="dashboard-header"> Courses </p>
                  {JSON.stringify(state.loggedInUser.PurchasedCourses)}{" "}
                  {state.loggedInUser.Corporate ? (
                    <p> Corporate {state.loggedInUser.Corporate}</p>
                  ) : (
                    <></>
                  )}
                </div>
              ) : activeTab == traineeProfileTabs.wallet ? (
                <div className="dashboard-package-card">
                  <h2 className="dashboard-header"> Wallet </h2>
                  <div>Balance: ${state.loggedInUser.Wallet}</div>
                </div>
              ) : activeTab == traineeProfileTabs.problems ? (
                <Grid container spacing={2} columns={16}>
                  <Grid xs={8}>
                    <Card variant="outlined">
                      {" "}
                      <CardContent>
                        <Typography variant="body1" color="text.secondary">
                          <br />
                          Course Name
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          <br />
                          This is the very long description of my report. My
                          problem report is a long report
                        </Typography>
                      </CardContent>{" "}
                      <CardContent>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                        ></Typography>
                      </CardContent>{" "}
                      <CardHeader title="Type" subheader="Status" />{" "}
                    </Card>{" "}
                  </Grid>
                  <Grid xs={8}>
                    <Paper variant="outlined" />
                  </Grid>
                  <Grid xs={8}>
                    <Paper variant="outlined" />
                  </Grid>
                  <Grid xs={8}>
                    <Paper variant="outlined" />
                  </Grid>
                </Grid>
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
