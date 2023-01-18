import React from "react";
import { useState, useEffect } from "react";
import "../../Styling/mainLayout.css";
import "../../Styling/dashboardLayout.css";
import { useGlobalState } from "../../App";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { CustomTextField } from "../../components/TextField";
import CorporateServices from "../../app/CorporateServices";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import Services from "../../app/AdminServices";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import axios from "axios";
import httpClient from "../../utils/httpClient";

function AdminDashboard() {
  const [state, dispatch] = useGlobalState();
  const [activeTab, setActiveTab] = useState("ADMINS");
  const navigation = useNavigate();
  const [isExpanded, setExpanded] = React.useState<String | false>("panel1");

  const [adminUsername, setAdminUsername] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [adminError, setAdminError] = useState("");

  const [corpName, setCorpName] = useState("");
  const [corpPassword, setCorpPassword] = useState("");
  const [corpEmail, setCorpEmail] = useState("");
  const [corpIndustry, setIndustry] = useState("");
  const [corpError, setCorpError] = useState("");

  const [instructorName, setInstructorName] = useState("");
  const [instructorPassword, setInstructorPassword] = useState("");
  const [instructorEmail, setInstructorEmail] = useState("");
  const [instructorBio, setInstructorBio] = useState("");
  const [instructorError, setInstructorError] = useState("");

  const [problems, setProblems] = useState([]);
  const[problemError, setProblemError] = useState('');
  const [refresh, setRefresh] = useState(false);

  const getproblems = async () => {
    const response = await httpClient.get("/create/problem");
    if (response.data) {
      return response.data;
    }
    return {};
  };

  useEffect(() => {
    const showproblems = async () => {
      const data = await getproblems();
      setProblems(data);
      console.log(problems);
    };
    showproblems();
  }, [refresh]);

  const handleCorpChange = (event: SelectChangeEvent) => {
    setIndustry(event.target.value as string);
  };

  const resolveProblem = (problem) => {
    axios.put("http://localhost:8000/create/resolveProblem", problem);
    setProblemError('success');
    setRefresh(!refresh);
  };
  const holdProblem = (problem) => {
    console.log(problem);
    axios.put("http://localhost:8000/create/holdProblem", problem);
    setProblemError('success');
    setRefresh(!refresh);
  };

  const buttons = [
    <Button key="one">One</Button>,
    <Button key="two">Two</Button>,
    <Button key="three">Three</Button>,
  ];

  return (
    <div className="container">
      {state.loggedInUser.type === "admin" ? (
        <div className="dashboard-body">
          <div className="dashboard-side-bar">
            <div>
              <p className="side-bar-header">Dashboard</p>
              <Divider variant="middle" />

              <Button
                id="side-bar-button"
                onClick={async () => {
                  setActiveTab("ADMINS");
                }}
              >
                {" "}
                Admins{" "}
              </Button>
              <Divider variant="middle" />

              <Button
                id="side-bar-button"
                onClick={() => {
                  setActiveTab("CORPORATES");
                }}
              >
                {" "}
                Corporates{" "}
              </Button>
              <Divider variant="middle" />

              <Button
                id="side-bar-button"
                onClick={() => {
                  setActiveTab("INSTRUCTORS");
                }}
              >
                {" "}
                Instructors{" "}
              </Button>
              <Divider variant="middle" />

              <Button
                id="side-bar-button"
                onClick={() => {
                  setActiveTab("PROBLEMS");
                }}
              >
                {" "}
                Problems{" "}
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
              {activeTab == "ADMINS" ? (
                <div className="dashboard-add-course-card">
                  <p className="dashboard-header"> Add Admins </p>

                  <CustomTextField
                    id="text-field"
                    placeholder="Username"
                    InputProps={{
                      className: "text-field",
                    }}
                    onChange={(e) => {
                      setAdminUsername(e.target.value);
                    }}
                  />
                  <CustomTextField
                    id="text-field"
                    placeholder="E-Mail"
                    InputProps={{
                      className: "text-field",
                    }}
                    onChange={(e) => {
                      setAdminEmail(e.target.value);
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
                      setAdminPassword(e.target.value);
                    }}
                  />
                  <Button
                    variant="contained"
                    id="big-button-primary"
                    onClick={async () => {
                      if (!adminEmail || !adminPassword || !adminUsername) {
                        setAdminError("Please fill all fields");
                      } else {
                        Services.createAdmin(
                          adminUsername,
                          adminEmail,
                          adminPassword
                        );
                        setAdminError("success");
                      }
                    }}
                  >
                    {" "}
                    Add Admin{" "}
                  </Button>

                  {adminError ? (
                    <Alert
                      severity={adminError === "success" ? "success" : "error"}
                      className="alert"
                    >
                      {adminError}
                    </Alert>
                  ) : (
                    <></>
                  )}
                </div>
              ) : activeTab == "CORPORATES" ? (
                <div className="dashboard-add-course-card">
                  <p className="dashboard-header"> Add Corporates </p>

                  <CustomTextField
                    id="text-field"
                    placeholder="Name"
                    InputProps={{
                      className: "text-field",
                    }}
                    onChange={(e) => {
                      setCorpName(e.target.value);
                    }}
                  />
                  <CustomTextField
                    id="text-field"
                    placeholder="E-Mail"
                    InputProps={{
                      className: "text-field",
                    }}
                    onChange={(e) => {
                      setCorpEmail(e.target.value);
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
                      setCorpPassword(e.target.value);
                    }}
                  />

                  <FormControl fullWidth>
                    <InputLabel className="selector-label">
                      Select the corporate's field
                    </InputLabel>
                    <Select className="selector" onChange={handleCorpChange}>
                      <MenuItem value={"Education"}>Education</MenuItem>
                      <MenuItem value={"Media"}>Media</MenuItem>
                      <MenuItem value={"Human Resources"}>
                        Human Resources
                      </MenuItem>
                      <MenuItem value={"Adminstration"}>Adminstration</MenuItem>
                      <MenuItem value={"Legal Firm"}>Legal Firm</MenuItem>
                      <MenuItem value={"Governmental"}>Governmental</MenuItem>
                    </Select>
                  </FormControl>

                  <Button
                    variant="contained"
                    id="big-button-primary"
                    onClick={async () => {
                      if (
                        !corpEmail ||
                        !corpPassword ||
                        !corpName ||
                        !corpIndustry
                      ) {
                        setCorpError("Please fill all fields");
                      } else {
                        Services.createCorp(
                          corpName,
                          corpEmail,
                          corpPassword,
                          corpIndustry
                        );
                        setCorpError("success");
                      }
                    }}
                  >
                    {" "}
                    Add Corporate{" "}
                  </Button>

                  {corpError ? (
                    <Alert
                      severity={corpError === "success" ? "success" : "error"}
                      className="alert"
                    >
                      {corpError}
                    </Alert>
                  ) : (
                    <></>
                  )}
                </div>
              ) : activeTab == "INSTRUCTORS" ? (
                <div className="dashboard-add-course-card">
                  <p className="dashboard-header"> Add Instructors </p>

                  <CustomTextField
                    id="text-field"
                    placeholder="Name"
                    InputProps={{
                      className: "text-field",
                    }}
                    onChange={(e) => {
                      setInstructorName(e.target.value);
                    }}
                  />
                  <CustomTextField
                    id="text-field"
                    placeholder="E-Mail"
                    InputProps={{
                      className: "text-field",
                    }}
                    onChange={(e) => {
                      setInstructorEmail(e.target.value);
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
                      setInstructorPassword(e.target.value);
                    }}
                  />

                  <CustomTextField
                    id="text-field"
                    placeholder="Short Bio"
                    multiline
                    rows={3}
                    InputProps={{
                      className: "short-bio",
                    }}
                    inputProps={{
                      maxLength: 150,
                    }}
                    onChange={(e) => {
                      setInstructorBio(e.target.value);
                    }}
                  />

                  <Button
                    variant="contained"
                    id="big-button-primary"
                    onClick={async () => {
                      if (
                        !instructorBio ||
                        !instructorEmail ||
                        !instructorName ||
                        !instructorPassword
                      ) {
                        setInstructorError("Please fill all fields");
                      } else {
                        Services.CreateInstructor(
                          instructorName,
                          instructorEmail,
                          instructorPassword,
                          instructorBio
                        );
                        setInstructorError("success");
                      }
                    }}
                  >
                    {" "}
                    Add Instructor{" "}
                  </Button>

                  {instructorError ? (
                    <Alert
                      severity={
                        instructorError === "success" ? "success" : "error"
                      }
                      className="alert"
                    >
                      {instructorError}
                    </Alert>
                  ) : (
                    <></>
                  )}
                </div>
              ) : activeTab == "PROBLEMS" ? (
                <div className="dashboard-add-course-card">
                  <p className="dashboard-header"> Current Problems </p>
                  {problems.map((problem) => (
                    <div className="problems-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Type</th> <br></br>
                          <th>Description</th> <br></br>
                          <th>Status</th> <br></br>
                          <th>Course</th> <br></br>
                          <th>Sender</th> <br></br>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{problem.Type}</td> <br></br>
                          <td>{problem.Description}</td> <br></br>
                          <td>{problem.Status}</td> <br></br>
                          <td>{problem.Course}</td> <br></br>
                          <td>{problem.Sender}</td> <br></br>
                        </tr>
                      </tbody>

                      <button onClick={() => resolveProblem(problem)}>
                        resolve
                      </button>
                      <button onClick={() => holdProblem(problem)}>
                        pending
                      </button>
                    </table>
                    </div>
                  ))}

                  { problemError ?
                    <Alert
                      severity={problemError === "success" ? "success" : "error"}
                      className="alert"
                    >
                      {problemError}
                    </Alert> 
                    : <></>}
                </div>
              ) : (
                <></>
              )}
            </div>
            {true ? (
              <Alert severity="success" className="alert">
                beta testing
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

export default AdminDashboard;
