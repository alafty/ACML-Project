import React from "react";
import { useState, useEffect } from "react";
import "../../Styling/mainLayout.css";
import "../../Styling/dashboardLayout.css";
import { useGlobalState } from "../../App";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import { CustomTextField } from "../../components/TextField";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CorporateServices from "../../app/CorporateServices";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import Services from "../../app/RequestsServices";
import coursesServices from "../../app/CoursesServices";
function CorporateDashboard() {
  const [state, dispatch] = useGlobalState();
  const [activeTab, setActiveTab] = useState("PROFILE ");
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
  const [courseData, setCourseData] = useState(null);
  const [courseID, setCourseID] = useState('');

  const handleTrainee = (data: any, isError?: boolean) => {
    if (isError) {
      setTraineeError(data);
      setTraineeSuccess(false);
    } else {
      setTraineeError("Trainee Successfully Created");
      setTraineeSuccess(true);
    }
  };
  const fetchCourseDetails = async (id: any) => {
    if(id){
      const courseDetails = await coursesServices.getCourseDetails(id);
      setCourseData(courseDetails);
    }
    
  };

  const renderRequests = ({_id, TraineeID, CourseID }) => {
    return (
      <div className="course-card-dashboard">
        <p className="course-name">{TraineeID}</p>
        <p className="course-name">{courseID}</p>
        {/* <p className="course-description"> {courseData.Description} </p> */}
        <Button
          variant="contained"
          id="big-button-primary"
          onClick={async () => {
            await Services.acceptRequest(TraineeID, CourseID, _id);
          }}
        >
          {" "}
          Accept Request{" "}
        </Button>

        <Button
          variant="outlined"
          id="big-button-primary-outlined"
          onClick={async () => {
            await Services.rejectRequest( _id);
          }}
        >
          {" "}
          Reject Request{" "}
        </Button>
      </div>
    );
  };

  const handleAccordionChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const buttons = [
    <Button key="one">One</Button>,
    <Button key="two">Two</Button>,
    <Button key="three">Three</Button>,
  ];
  const fetch = async () => {
    await fetchCourseDetails(courseID);
  };

  useEffect(() => {
    fetch();
  }, [courseID]);
  return (
    <div className="container">
      {state.loggedInUser.type === "corporate" ? (
        <div className="dashboard-body">
          <div className="dashboard-side-bar">
            <div>
              <p className="side-bar-header">Dashboard</p>
              <Divider variant="middle" />

              <Button
                id="side-bar-button"
                onClick={async () => {
                  setActiveTab("REQUESTS");
                  const reqs = await Services.fetchCorporateRequests(
                    state.loggedInUser._id
                  );
                  setRequests(reqs);
                  console.log(reqs);
                  setPackageConfirmation("");
                  setTraineeError("");
                  setTraineeSuccess(false);
                }}
              >
                {" "}
                View Requests{" "}
              </Button>
              <Divider variant="middle" />

              <Button
                id="side-bar-button"
                onClick={() => {
                  setActiveTab("TRAINEES");
                  setPackageConfirmation("");
                  setTraineeError("");
                  setTraineeSuccess(false);
                }}
              >
                {" "}
                Manage Trainees{" "}
              </Button>
              <Divider variant="middle" />

              <Button
                id="side-bar-button"
                onClick={() => {
                  setActiveTab("PACKAGE");
                  setPackageConfirmation("");
                  setTraineeError("");
                  setTraineeSuccess(false);
                }}
              >
                {" "}
                Switch Package{" "}
              </Button>
              <Divider variant="middle" />

              <Button
                id="side-bar-button"
                onClick={() => {
                  setActiveTab("PROFILE");
                  setPackageConfirmation("");
                  setTraineeError("");
                  setTraineeSuccess(false);
                }}
              >
                {" "}
                Corporate Profile{" "}
              </Button>
              <Divider variant="middle" />
            </div>
            <div>
              <Divider variant="middle" />
              <Button
                id="side-bar-button"
                onClick={() => {
                  state.loggedInUser = {};
                  console.log(state.loggedInUser);
                  navigation("/corporate");
                }}
              >
                {" "}
                Log out{" "}
              </Button>
            </div>
          </div>
          <div>
            <div>
              {activeTab == "REQUESTS" ? (
                <div className="dashboard-main-card">
                  <p className="dashboard-header"> Latest Requests </p>
                  {requests ? requests.map(renderRequests): 
                  <p className="dashboard-header"> There are currently no requests</p>}
                </div>
              ) : activeTab == "TRAINEES" ? (
                <>
                  <div className="dashboard-trainee-card">
                    <p className="dashboard-header"> Add Trainees </p>
                    <CustomTextField
                      id="text-field"
                      placeholder="E-Mail"
                      InputProps={{
                        className: "text-field",
                      }}
                      onChange={(e) => {
                        setTraineeMail(e.target.value);
                      }}
                    />

                    <CustomTextField
                      id="text-field"
                      placeholder="Name"
                      InputProps={{
                        className: "text-field",
                      }}
                      onChange={(e) => {
                        setTraineeName(e.target.value);
                      }}
                    />

                    <CustomTextField
                      id="text-field"
                      placeholder="Password"
                      type={"password"}
                      InputProps={{
                        className: "text-field",
                      }}
                      onChange={(e) => {
                        setTraineePassword(e.target.value);
                      }}
                    />

                    <CustomTextField
                      id="text-field"
                      placeholder="Confirm Password"
                      type={"password"}
                      InputProps={{
                        className: "text-field",
                      }}
                      onChange={(e) => {
                        setTraineeConfirm(e.target.value);
                      }}
                    />
                    <Button
                      variant="contained"
                      id="big-button-primary"
                      onClick={async () => {
                        if (
                          !traineeConfirm ||
                          !traineePassword ||
                          !traineeMail ||
                          !traineeName
                        ) {
                          setTraineeError("Please fill all data");
                        } else if (traineeConfirm !== traineePassword) {
                          setTraineeError(
                            "Password and Confirm password do not match"
                          );
                        } else {
                          CorporateServices.addTrainee(
                            traineeName,
                            traineePassword,
                            traineeMail,
                            state.loggedInUser._id,
                            handleTrainee
                          );
                        }
                      }}
                    >
                      {" "}
                      Add Trainee{" "}
                    </Button>
                  </div>
                  <div className="dashboard-trainee-card">
                    <p className="dashboard-header"> Delete Trainees </p>
                    <CustomTextField
                      id="text-field"
                      placeholder="E-Mail"
                      InputProps={{
                        className: "text-field",
                      }}
                      onChange={(e) => {
                        setTraineeMail(e.target.value);
                      }}
                    />

                    <Button
                      variant="contained"
                      id="big-button-primary"
                      onClick={async () => {
                        setTraineeError(
                          "This Button has no backend methods; please create them :("
                        );
                      }}
                    >
                      {" "}
                      Delete Trainee{" "}
                    </Button>
                  </div>
                </>
              ) : activeTab == "PACKAGE" ? (
                <div className="dashboard-package-card">
                  <h2 className="dashboard-header"> Change Packages </h2>
                  <Accordion
                    expanded={isExpanded === "panel1"}
                    onChange={handleAccordionChange("panel1")}
                    className="accordion"
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography id="package-header">Feed The Seed</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography id="package-details">
                        * Register up to 5 Trainees
                      </Typography>
                      <Typography id="package-details">
                        * Each trainee can enroll in up to 3 courses
                      </Typography>
                      <Typography id="package-details">
                        * All Courses are accessible
                      </Typography>
                      <Typography id="package-price">
                        100 EUR / Month
                      </Typography>
                      <Button
                        id="package-button"
                        onClick={async () => {
                          await CorporateServices.changePackage(
                            state.loggedInUser._id,
                            "63b82228fda53129cb7b0a9f"
                          );
                          setPackageConfirmation(
                            "Package Changed Successfully"
                          );
                        }}
                      >
                        {" "}
                        Change Package{" "}
                      </Button>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    expanded={isExpanded === "panel2"}
                    className="accordion"
                    onChange={handleAccordionChange("panel2")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography id="package-header">Grow The Seed</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography id="package-details">
                        * Register up to 10 Trainees
                      </Typography>
                      <Typography id="package-details">
                        * Each trainee can enroll in up to 5 courses
                      </Typography>
                      <Typography id="package-details">
                        * All Courses are accessible
                      </Typography>
                      <Typography id="package-price">
                        150 EUR / Month
                      </Typography>
                      <Button
                        id="package-button"
                        onClick={async () => {
                          await CorporateServices.changePackage(
                            state.loggedInUser._id,
                            "63b82228fda51129cb7b0a9f"
                          );
                          setPackageConfirmation(
                            "Package Changed Successfully"
                          );
                        }}
                      >
                        {" "}
                        Change Package{" "}
                      </Button>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion
                    expanded={isExpanded === "panel3"}
                    className="accordion"
                    onChange={handleAccordionChange("panel3")}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography id="package-header">
                        Harvest The Tree
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography id="package-details">
                        * Register up to 50 Trainees
                      </Typography>
                      <Typography id="package-details">
                        * Each trainee can enroll in up to 10 courses
                      </Typography>
                      <Typography id="package-details">
                        * All Courses are accessible
                      </Typography>
                      <Typography id="package-price">
                        300 EUR / Month
                      </Typography>
                      <Button
                        id="package-button"
                        onClick={async () => {
                          await CorporateServices.changePackage(
                            state.loggedInUser._id,
                            "63b8237ffda53129cb7b0aa3"
                          );
                          setPackageConfirmation(
                            "Package Changed Successfully"
                          );
                        }}
                      >
                        {" "}
                        Change Package{" "}
                      </Button>
                    </AccordionDetails>
                  </Accordion>
                </div>
              ) : activeTab == "PROFILE" ? (
                <div className="dashboard-main-card">
                  <p className="dashboard-header"> Profile </p>
                </div>
              ) : (
                <></>
              )}
            </div>
            {packageConfirmation ? (
              <Alert severity="success" className="alert">
                {packageConfirmation}
              </Alert>
            ) : (
              <></>
            )}

            {traineeError ? (
              <Alert
                severity={isTraineeSuccess ? "success" : "error"}
                className="alert"
              >
                {traineeError}
              </Alert>
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <p> Error 401: Unauthorized Access</p>
      )}
    </div>
  );
}

export default CorporateDashboard;
