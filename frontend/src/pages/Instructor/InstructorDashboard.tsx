import React, { useEffect, useState } from "react";
import "../../Styling/dashboardLayout.css";
import Header from "../../components/header";
import Button from "@mui/material/Button";
import {
  Accordion,
  Alert,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useGlobalState } from "../../App";
import services from "../../app/InstructorServices";
import { useNavigate } from "react-router-dom";
import { extractIdFromVideoUrl } from "../../utils/video_utils";
import { CustomTextField } from "../../components/TextField";
import coursesServices from "../../app/CoursesServices";
import instructorServices from "../../app/InstructorServices";

function InstructorDashboard() {
  const [state, dispatch] = useGlobalState();
  const navigation = useNavigate();
  const [isEditing, setIsEditing] = React.useState(false);
  const [avgRating, setAvgRating] = React.useState(
    state.loggedInUser.RatingAvg
  );
  const [email, setEmail] = React.useState(state.loggedInUser.Email);
  const [bio, setBio] = React.useState(state.loggedInUser.ShortBio);
  const [activeTab, setActiveTab] = useState("REQUESTS");
  //console.log(state.loggedInUser);

  const [courseID, setCourseID] = useState("");
  const [courseName, setCourseName] = React.useState("");
  const [coursePrice, setCoursePrice] = React.useState("");
  const [subject, setSubject] = useState("");
  const [courseVidID, setCourseVidID] = React.useState("");
  const [totalHours, setTotalHours] = React.useState("");
  const [courseDescription, setCourseDescription] = React.useState("");
  const [courseError, setCourseError] = React.useState("");

  const [courseSubtitles, setCourseSubtitles] = useState([]);
  const [subtitleID, setSubtitleID] = useState("");
  const [subtitleDescription, setSubtitleDescription] = useState("");
  const [vidUrl, setVidUrl] = useState("");
  const [subtitleError, setSubtitleError] = useState("");

  const [quizzes, setQuizzes] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState("");
  const [question, setQuestion] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [grade, setGrade] = useState('');
  const [quizError, setQuizError] = useState("");
  const [quizzesIDs, setQuizzesIDs] = useState([]);

  const [renderedCourses, setRenderedCourses] = useState([]);


  const quizzesCallback = async(id) => {
    let tempQuizzesIDs = quizzesIDs;
    tempQuizzesIDs.push(id);
    setQuizzesIDs(tempQuizzesIDs);
  }
  const fetchDetails = async (id: string) => {
    const courseDetails = await coursesServices.getCourseDetails(id);
    let tempCourses = renderedCourses;
    //console.log(renderedCourses.some(e => e._id === courseDetails._id));
    if (!renderedCourses.some((e) => e._id === courseDetails._id)) {
      tempCourses.push(courseDetails);
    }
    setRenderedCourses(tempCourses);
  };

  const fetch = async () => {
    for (
      let index = 0;
      index <= state.loggedInUser.Courses.length - 1;
      index++
    ) {
      await fetchDetails(state.loggedInUser.Courses[index]);
    }
  };

  useEffect(() => {
    fetch();
  }, [renderedCourses, quizzesIDs]);

  const renderCourses = ({ Name, Description, _id }) => {
    return (
      <div className="course-card-dashboard">
        <p className="course-name">{Name}</p>
        <p className="course-description"> {Description} </p>
        <Button
          variant="contained"
          id="big-button-primary"
          onClick={async () => {
            navigation("/course=");
          }}
        >
          {" "}
          View Course{" "}
        </Button>
      </div>
    );
  };

  const handleSubjectChange = (event: SelectChangeEvent) => {
    setSubject(event.target.value as string);
  };

  const handleQuizSelector = (event: SelectChangeEvent) => {
    setSelectedQuiz(event.target.value);
  };

  const handleUrlUpload = (url) => {
    try {
      const vidId = extractIdFromVideoUrl(url);
      if (vidId) {
        return true;
      } else {
        return false;
      }
    } catch {
      return false;
    }
  };

  const handleChanges = (callback) => {
    let tempUser = state.loggedInUser;
    tempUser.Email = email;
    tempUser.ShortBio = bio;
    dispatch({ loggedInUser: tempUser });
    console.log(state.loggedInUser);
  };

  const buttons = [
    <Button key="one">One</Button>,
    <Button key="two">Two</Button>,
    <Button key="three">Three</Button>,
  ];

  return (
    <div className="container">
      {state.loggedInUser.type === "instructor" ? (
        <div className="instructor-dashboard-body">
          <div className="instructor-dashboard-side-bar">
            <div>
              <p className="side-bar-header">Dashboard</p>
              <Divider variant="middle" />

              <Button
                id="side-bar-button"
                onClick={async () => {
                  setActiveTab("COURSES");
                }}
              >
                {" "}
                My Courses{" "}
              </Button>
              <Divider variant="middle" />

              <Button
                id="side-bar-button"
                onClick={() => {
                  setActiveTab("ADD");
                }}
              >
                {" "}
                Add Course{" "}
              </Button>
              <Divider variant="middle" />

              <Button
                id="side-bar-button"
                onClick={() => {
                  setActiveTab("PROBLEMS");
                }}
              >
                {" "}
                Report a Problem{" "}
              </Button>
              <Divider variant="middle" />

              <Button
                id="side-bar-button"
                onClick={() => {
                  setActiveTab("PROFILE");
                }}
              >
                {" "}
                Profile{" "}
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
                  navigation("/instructor");
                }}
              >
                {" "}
                Log out{" "}
              </Button>
            </div>
          </div>
          <div>
            <div>
              {activeTab == "COURSES" ? (
                <div className="dashboard-courses-card">
                  <p className="dashboard-header"> My Courses </p>
                  <div className="grid-container">
                    {renderedCourses.map(renderCourses)}
                  </div>
                </div>
              ) : activeTab == "ADD" ? (
                <>
                  <div className="dashboard-add-course-card">
                    <p
                      className="course-details-title"
                      style={{ marginTop: "0px", marginBottom: "20px" }}
                    >
                      {" "}
                      Add New Course{" "}
                    </p>
                    <CustomTextField
                      id="text-field"
                      placeholder="Course Name"
                      InputProps={{
                        className: "text-field",
                      }}
                      onChange={(e) => {
                        setCourseName(e.target.value);
                      }}
                    />
                    <CustomTextField
                      id="text-field"
                      type="number"
                      placeholder="Course Price"
                      InputProps={{
                        className: "text-field",
                        inputMode: "numeric",
                      }}
                      onChange={(e) => {
                        if (e.target.value > "0" && e.target.value < "9") {
                          setCoursePrice(e.target.value);
                        }
                      }}
                    />
                    <CustomTextField
                      id="text-field"
                      placeholder="Preview Video URL"
                      InputProps={{
                        className: "text-field",
                      }}
                      onChange={(e) => {
                        setCourseVidID(e.target.value);
                      }}
                    />
                    <CustomTextField
                      id="text-field"
                      type="number"
                      placeholder="Total Hours"
                      InputProps={{
                        className: "text-field",
                        inputMode: "numeric",
                      }}
                      onChange={(e) => {
                        setTotalHours(e.target.value);
                      }}
                    />
                    <FormControl fullWidth>
                      <InputLabel className="selector-label">
                        Subject
                      </InputLabel>
                      <Select
                        className="selector"
                        onChange={handleSubjectChange}
                      >
                        <MenuItem value={"Engineering"}>Engineering</MenuItem>
                        <MenuItem value={"Politics"}>Politics</MenuItem>
                        <MenuItem value={"Economics"}>Economics</MenuItem>
                        <MenuItem value={"Law"}>Law</MenuItem>
                        <MenuItem value={"Architecture"}>Architecture</MenuItem>
                      </Select>
                    </FormControl>
                    <CustomTextField
                      id="text-field"
                      placeholder="Course Description"
                      multiline
                      rows={3}
                      InputProps={{
                        className: "short-bio",
                      }}
                      inputProps={{
                        maxLength: 150,
                      }}
                      onChange={(e) => {
                        setCourseDescription(e.target.value);
                      }}
                    />
                    {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                    <p
                      className="course-details-title"
                      style={{ marginTop: "0px", marginBottom: "20px" }}
                    >
                      {" "}
                      Add Course Content{" "}
                    </p>
                    <CustomTextField
                      id="text-field"
                      placeholder="Subtitle Description"
                      multiline
                      rows={3}
                      InputProps={{
                        className: "short-bio",
                      }}
                      inputProps={{
                        maxLength: 150,
                      }}
                      onChange={(e) => {
                        setSubtitleDescription(e.target.value);
                      }}
                    />
                    <CustomTextField
                      id="text-field"
                      placeholder="Video URL"
                      InputProps={{
                        className: "text-field",
                      }}
                      onChange={(e) => {
                        setVidUrl(e.target.value);
                      }}
                    />
                    <Button
                      variant="contained"
                      id="big-button-primary"
                      onClick={async () => {
                        if (!vidUrl || !subtitleDescription) {
                          setSubtitleError("Please Fill All Fields");
                        } else {
                          if (handleUrlUpload(vidUrl)) {
                            const newSubtitle = {
                              VideoId: vidUrl,
                              Description: subtitleDescription,
                              Order: courseSubtitles.length,
                            };
                            let tempSubs = courseSubtitles;
                            tempSubs.push(newSubtitle);
                            setCourseSubtitles(tempSubs);
                            console.log(courseSubtitles);
                            
                            setSubtitleError("Subtitle Added");
                          } else {
                            setSubtitleError("invalid URL");
                          }
                        }
                      }}
                    >
                      {" "}
                      Add Subtitle{" "}
                    </Button>
                    {subtitleError ? (
                      <Alert
                        severity={
                          subtitleError == "success" ? "success" : "error"
                        }
                        className="alert"
                      >
                        {subtitleError}
                      </Alert>
                    ) : (
                      <></>
                    )}
                    {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                    <p
                      className="course-details-title"
                      style={{ marginTop: "0px", marginBottom: "20px" }}
                    >
                      {" "}
                      Add Course Quizzes{" "}
                    </p>
                    <FormControl fullWidth>
                      <InputLabel className="selector-label">
                        Quizzes
                      </InputLabel>
                      <Select
                        className="selector"
                        onChange={handleQuizSelector}
                      >
                        {quizzes.map(({Order}) => (
                          <MenuItem 
                          key={Order} 
                          value={Order}>
                            {Order}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <Button
                      variant="contained"
                      id="big-button-primary"
                      onClick={async () => {
                        let tempQuiz = quizzes;
                        let tempName = {
                          Order: quizzes.length + 1,
                          Questions: []
                        }
                        tempQuiz.push(tempName);
                        setQuizzes(tempQuiz);
                        
                        console.log(quizzes);
                      }}
                    >
                      {" "}
                      Add New Quiz{" "}
                    </Button>

                    <CustomTextField
                      id="text-field"
                      placeholder="Question"
                      InputProps={{
                        className: "text-field",
                      }}
                      onChange={(e) => {
                        setQuestion(e.target.value);
                      }}
                    />

                    <CustomTextField
                      id="text-field"
                      placeholder="Answer 1"
                      InputProps={{
                        className: "text-field",
                      }}
                      onChange={(e) => {
                        setAnswer1(e.target.value);
                      }}
                    />

                    <CustomTextField
                      id="text-field"
                      placeholder="Answer 2"
                      InputProps={{
                        className: "text-field",
                      }}
                      onChange={(e) => {
                        setAnswer2(e.target.value);
                      }}
                    />

                    <CustomTextField
                      id="text-field"
                      placeholder="Answer 3"
                      InputProps={{
                        className: "text-field",
                      }}
                      onChange={(e) => {
                        setAnswer3(e.target.value);
                      }}
                    />

                    <CustomTextField
                      id="text-field"
                      placeholder="Answer 4"
                      InputProps={{
                        className: "text-field",
                      }}
                      onChange={(e) => {
                        setAnswer4(e.target.value);
                      }}
                    />

                    <CustomTextField
                      id="text-field"
                      placeholder="Solution"
                      InputProps={{
                        className: "text-field",
                      }}
                      onChange={(e) => {
                        setCorrectAnswer(e.target.value);
                      }}
                    />

                    <CustomTextField
                      id="text-field"
                      placeholder="Grade"
                      InputProps={{
                        className: "text-field",
                      }}
                      onChange={(e) => {
                        setGrade(e.target.value);
                      }}
                    />
                    <Button
                      variant="contained"
                      id="big-button-primary"
                      onClick={async () => {
                        if (
                          !question ||
                          !answer1 ||
                          !answer1 ||
                          !answer2 ||
                          !answer3 ||
                          !answer4 ||
                          !correctAnswer
                        ) {
                          setQuizError("Please Fill All Fields");
                        } else if (!selectedQuiz) {
                          setQuizError(
                            "Please select a quiz to add this question in"
                          );
                        } else {
                          //ADD A QUESTION TO COURSES
                          let tempQues = {
                            Question: question,
                            Choice1: answer1,
                            Choice2: answer2,
                            Choice3: answer3,
                            Choice4: answer4,
                            Answer: correctAnswer,
                            Grade: grade
                          }
                          let tempQuiz = quizzes;
                          tempQuiz[Number(selectedQuiz) - 1].Questions.push(tempQues);
                          setQuizzes(tempQuiz);
                          console.log(quizzes);
                        }
                      }}
                    >
                      {" "}
                      Add Question to Selected Quiz{" "}
                    </Button>
                    {quizError ? (
                      <Alert
                        severity={
                          subtitleError == "success" ? "success" : "error"
                        }
                        className="alert"
                      >
                        {quizError}
                      </Alert>
                    ) : (
                      <></>
                    )}
                    <Button
                      variant="contained"
                      id="big-button-primary"
                      onClick={async () => {
                        if (
                          !courseDescription ||
                          !courseName ||
                          !coursePrice ||
                          !courseVidID ||
                          !totalHours ||
                          !subject
                        ) {
                          console.log(courseDescription + '  ' +
                            courseName + '  ' +
                            coursePrice + '  ' +
                            courseVidID + '  ' +
                            totalHours + '  ' +
                            subject);
                          
                          setCourseError("Please Fill All Fields");
                        } else {
                          setCourseError('');
                          let actualQuizzes = 1;
                          let quizzesid =[]
                          for(let i = 0; i < quizzes.length; i++){
                            if(quizzes[i].Questions.length > 0){
                              await instructorServices.createQuiz(actualQuizzes + '', quizzes[i].Questions, quizzesCallback); 
                              //console.log(quizzesIDs);
                              actualQuizzes ++;
                            }
                          }
                          const feedback = await coursesServices.createCourse(
                            courseName,
                            subject,
                            state.loggedInUser._id,
                            coursePrice,
                            totalHours,
                            courseVidID,
                            courseDescription,
                            quizzesIDs,
                            courseSubtitles
                          );
                          console.log(feedback);
                        }
                      }}
                    >
                      {" "}
                      Publish Course{" "}
                    </Button>
                    {courseError ? (
                      <Alert
                        severity={
                          subtitleError == "success" ? "success" : "error"
                        }
                        className="alert"
                      >
                        {courseError}
                      </Alert>
                    ) : (
                      <></>
                    )}
                  </div>
                </>
              ) : activeTab == "PROBLEMS" ? (
                <div className="dashboard-package-card">
                  <h2 className="dashboard-header"> Report a Problem </h2>
                </div>
              ) : activeTab == "PROFILE" ? (
                <div className="dashboard-package-card">
                  <h2 className="dashboard-header"> Profile </h2>
                  <p className="profile-items">
                    {" "}
                    Name: {state.loggedInUser.Username}
                  </p>
                  {isEditing ? (
                    <>
                      <CustomTextField
                        id="text-field"
                        placeholder="E-Mail"
                        InputProps={{
                          className: "text-field",
                        }}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                      <CustomTextField
                        id="text-field"
                        placeholder="Short-Bio"
                        InputProps={{
                          className: "text-field",
                        }}
                        onChange={(e) => {
                          setBio(e.target.value);
                        }}
                      />{" "}
                    </>
                  ) : (
                    <>
                      <p className="profile-items">
                        {" "}
                        E-Mail: {state.loggedInUser.Email}
                      </p>
                      <p className="profile-items">
                        {" "}
                        Bio: {state.loggedInUser.ShortBio}
                      </p>
                    </>
                  )}
                  <p className="profile-items">
                    {" "}
                    Average Rating: {state.loggedInUser.avgRating}
                  </p>

                  <Button
                    variant="contained"
                    id="big-button-primary"
                    onClick={async () => {
                      if (isEditing) {
                        console.log(email);
                        await services.editInstructorDetails(
                          state.loggedInUser.Email,
                          handleChanges,
                          email,
                          bio
                        );
                        console.log("clikk");
                      }
                      setIsEditing(!isEditing);
                    }}
                  >
                    {" "}
                    {isEditing ? "Confirm Changes" : "Edit Personal Details"}
                  </Button>
                </div>
              ) : (
                <></>
              )}
              ;
            </div>
          </div>
        </div>
      ) : (
        <p> Error 401: Unauthorized Access</p>
      )}
    </div>
  );
}

export default InstructorDashboard;

{
  /* // <div>
    //   <Header/>
    //   <div className='body' style={{display: 'flex', flexDirection: 'row'}}>
    //   <div style={{display: 'flex', flexDirection: 'column', width: '25%', padding: '20px'}} >
    //     <img src='../../assets/hat.png' style={{width: '90%', height: '90%', borderRadius: '10px'}}/>
    //     <h2> Instructor Name</h2>
    //      {isEditing ?<TextField label="Edit Bio" variant="standard" placeholder={bio}
    //         onChange={(e) => {
    //           setBio(e.target.value);
    //         }}
    //       /> : <p> {bio} </p>}
          
    //     <h2> Average Rating: {avgRating}</h2>
    //     {isEditing ? <TextField label="Edit E-Mail" variant="standard" placeholder={email}
    //         onChange={(e) => {
    //           setEmail(e.target.value);
    //         }} /> : <h2> E-Mail: {email} </h2>}
    //     <Button variant='outlined' id='outlined' 
    //     onClick={() =>{
    //       if(isEditing){
    //         services.editInstructorDetails(state.loggedInUser.user.Username, handleChanges, email, bio);
    //       }
    //       setIsEditing(!isEditing);
    //     }}> {isEditing ? 'Confirm Changes' : 'Edit Personal Details'}</Button>
    //     <Button variant='contained' id='filled-button' style={{marginLeft: '20px'}}> Add New Course</Button>
    //   </div>
    //   <div style={{display: 'flex', flexDirection: 'column', width: '75%', padding: '50px'}}>
    //     <h1>Recent Courses</h1>
    //     <div style={{backgroundColor: '#f0f0f0', borderRadius: '20px', width: '100%', height:'100%'}}>

    //     </div>
    //   </div>
    //   </div>
// </div>} */
}

{
  /* <Button 
                        variant="contained" 
                        id="big-button-primary"
                        onClick={async () => {
                          await coursesServices.createCourse(courseName, subject, state.loggedInUser._id, 
                            coursePrice, totalHours, courseVidID, courseDescription)
                        }}
                        > Add Content </Button> */
}
