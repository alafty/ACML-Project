import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import courseServices from "../../app/CoursesServices";
import Divider from "@mui/material/Divider";
import CourseDetailsSubtitles from "../../components/Course/CourseDetailsSubtitles";
import { useGlobalState } from "../../App";
import LoggedInBar from "../../components/loggeedInAppBar";
import Services from "../../app/CoursesServices";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

import pdfServices from "../../app/pdfServices";
import CourseVideo from "../../components/Course/CourseVideo";
import { CustomTextField } from "../../components/TextField";
import services from "../../app/UsersServices";

export default function PurchasedCourseDetails() {
  const { id } = useParams();

  const [openedSubtitles, setOpenedSubtitles] = useState(0.0);
  const [startedQuiz, setStartedQuiz] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [quizGrade, setQuizGrade] = useState(0);
  const [questionGrade, setQuestionGrade] = useState(0);
  const [chosenAnswer, setChosenAnswer] = useState(0);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState<null | number>(null);
  const [quizzes, setQuizzes] = useState(null);
  const [subtitles, setSubtitles] = useState(null);
  const [currentSubtitle, setCurrentSubtitle] = useState(null);
  const [courseDetails, setCourseDetails] = useState(null);
  const [state, dispatch] = useGlobalState();
  const [isPurchased, setPurchased] = useState(false);
  const [Notes, setNotes] = useState("");

  const calulateScore = async () => {
    const choice =
      chosenAnswer === 1
        ? currentQuiz.Questions[currentQuestion].Choice1
        : chosenAnswer === 2
        ? currentQuiz.Questions[currentQuestion].Choice2
        : chosenAnswer === 3
        ? currentQuiz.Questions[currentQuestion].Choice3
        : chosenAnswer === 4
        ? currentQuiz.Questions[currentQuestion].Choice4
        : currentQuiz.Questions[currentQuestion].Choice1;

    if (currentQuiz.Questions[currentQuestion].Answer === choice) {
      setQuestionGrade(
        questionGrade + parseFloat(currentQuiz.Questions[currentQuestion].Grade)
      );
    }

    let tempAnswer = correctAnswers;
    tempAnswer.push(currentQuiz.Questions[currentQuestion].Answer);
    setCorrectAnswers(tempAnswer);

    setQuizGrade(
      quizGrade + parseFloat(currentQuiz.Questions[currentQuestion].Grade)
    );
    //console.log(quizGrade);

    if (currentQuiz.Questions.length - 1 > currentQuestion) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      console.log("done");
      setStartedQuiz(false);
      var curr = quizzes;
      if (!curr[currentQuiz.Order - 1].completed) {
        curr[currentQuiz.Order - 1].completed = true;
        setOpenedSubtitles(openedSubtitles + 1);
        setQuizzes(curr);
        const change = await Services.changeProgress(
          courseDetails._id,
          state.loggedInUser._id,
          (openedSubtitles / parseFloat(quizzes.length)) * 100 + ""
        );
        console.log(change);
      }
    }
  };
  useEffect(() => {
    const fetchCourseDetails = async () => {
      const details = await courseServices.getCourseDetails(id);
      setCourseDetails(details);
      setSubtitles(courseDetails.Subtitles);
      if (!currentSubtitle) {
        setCurrentSubtitle(subtitles[0]);
      }
      await courseServices
        .getCourseQuizzes(id)
        .then((data) => setQuizzes(data));
    };

    const isCoursePurchased = async () => {
      if (state.loggedInUser.Username) {
        //console.log(isPurchased);
        for (
          let index = 0;
          index < state.loggedInUser.PurchasedCourses.length;
          index++
        ) {
          if (state.loggedInUser.PurchasedCourses[index].courseID === id) {
            //console.log(state.loggedInUser.PurchasedCourses[index].courseID);
            setPurchased(true);
          }
        }
      }
    };
    fetchCourseDetails();
    isCoursePurchased();
  }, [courseDetails]);

  const renderSubtitle = ({ _id, Description, Order }) => {
    return (
      <div className="purchased-course-subtitle">
        <p className="course-details-subtitle-header"> Subsection {Order}</p>
        <p className="course-details-subtitle-description">{Description}</p>
        <Button
          variant="contained"
          id="big-button-secondary"
          onClick={() => {
            setCurrentSubtitle(subtitles[Order]);
          }}
        >
          {" "}
          View{" "}
        </Button>
      </div>
    );
  };

  const renderQuizzes = ({ Order }) => {
    return (
      <div className="purchased-course-subtitle">
        <p className="course-details-subtitle-header"> Quiz {Order}</p>
        <Button
          variant="contained"
          id="big-button-secondary"
          onClick={() => {
            setCorrectAnswers([]);
            setStartedQuiz(true);
            setQuizGrade(0);
            setQuestionGrade(0);
            setCurrentQuiz(quizzes[Order - 1]);
            setCurrentQuestion(0);
          }}
        >
          {" "}
          Take Quiz{" "}
        </Button>
      </div>
    );
  };

  return (
    <div className="container">
      {true ? (
        <>
          <LoggedInBar default="/home" />

          <div
            className="course-details-body"
            style={{ display: "flex", flexDirection: "row" }}
          >
            {/* {id} */}
            <div
              style={{ display: "flex", flexDirection: "column", width: "30%" }}
            >
              <div className="purchased-course-subtitles-card">
                <p
                  className="course-details-title"
                  style={{ marginTop: "0px", marginBottom: "20px" }}
                >
                  {" "}
                  Course Content{" "}
                </p>
                {courseDetails?.Subtitles.map(renderSubtitle)}
              </div>
              <div className="purchased-course-subtitles-card">
                <p
                  className="course-details-title"
                  style={{ marginTop: "0px", marginBottom: "20px" }}
                >
                  {" "}
                  Course Quizzes{" "}
                </p>
                {quizzes?.map(renderQuizzes)}
              </div>
            </div>
            <div style={{ width: "70%" }}>
              <CourseVideo embedId={currentSubtitle?.VideoId} />
              <div className="course-details-card">
                <p className="purchased-course-description">
                  {currentSubtitle?.Description}
                </p>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <CustomTextField
                    id="text-field"
                    placeholder="Notes"
                    multiline
                    rows={3}
                    InputProps={{
                      className: "short-bio",
                    }}
                    onChange={(e) => {
                      setNotes(e.target.value);
                    }}
                  />
                  <Button
                    variant="contained"
                    id="big-button-primary"
                    onClick={() => {
                      pdfServices.generateNotesPDF(Notes);
                    }}
                  >
                    {" "}
                    Download Notes{" "}
                  </Button>
                </div>
              </div>
              <div className="quiz-card">
                {startedQuiz ? (
                  <>
                    <p className="course-details-title">
                      {" "}
                      {currentQuiz.Questions[currentQuestion].Question}{" "}
                    </p>
                    <FormControl>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="1"
                        id="radio-quiz"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel
                          value="1"
                          control={<Radio />}
                          label={currentQuiz.Questions[currentQuestion].Choice1}
                          onClick={() => {
                            setChosenAnswer(1);
                          }}
                        />
                        <FormControlLabel
                          value="2"
                          control={<Radio />}
                          label={currentQuiz.Questions[currentQuestion].Choice2}
                          onClick={() => {
                            setChosenAnswer(2);
                          }}
                        />
                        <FormControlLabel
                          value="3"
                          control={<Radio />}
                          label={currentQuiz.Questions[currentQuestion].Choice3}
                          onClick={() => {
                            setChosenAnswer(3);
                          }}
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label={currentQuiz.Questions[currentQuestion].Choice4}
                          onClick={() => {
                            setChosenAnswer(4);
                          }}
                        />
                      </RadioGroup>
                    </FormControl>
                    <p> your score {questionGrade}</p>
                    <Button
                      variant="contained"
                      id="big-button-primary"
                      onClick={async () => {
                        const choice =
                          chosenAnswer === 1
                            ? currentQuiz.Questions[currentQuestion].Choice1
                            : chosenAnswer === 2
                            ? currentQuiz.Questions[currentQuestion].Choice2
                            : chosenAnswer === 3
                            ? currentQuiz.Questions[currentQuestion].Choice3
                            : chosenAnswer === 4
                            ? currentQuiz.Questions[currentQuestion].Choice4
                            : currentQuiz.Questions[currentQuestion].Choice1;

                        if (
                          currentQuiz.Questions[currentQuestion].Answer ===
                          choice
                        ) {
                          setQuestionGrade(
                            questionGrade +
                              parseFloat(
                                currentQuiz.Questions[currentQuestion].Grade
                              )
                          );
                        }

                        let tempAnswer = correctAnswers;
                        tempAnswer.push(
                          currentQuiz.Questions[currentQuestion].Answer
                        );
                        setCorrectAnswers(tempAnswer);

                        setQuizGrade(
                          quizGrade +
                            parseFloat(
                              currentQuiz.Questions[currentQuestion].Grade
                            )
                        );
                        //console.log(quizGrade);

                        if (
                          currentQuiz.Questions.length - 1 >
                          currentQuestion
                        ) {
                          setCurrentQuestion(currentQuestion + 1);
                        } else {
                          console.log("done");
                          setStartedQuiz(false);
                          var curr = quizzes;
                          if (!curr[currentQuiz.Order - 1].completed) {
                            curr[currentQuiz.Order - 1].completed = true;
                            setOpenedSubtitles(openedSubtitles + 1);
                            setQuizzes(curr);
                            const change = await Services.changeProgress(
                              id,
                              state.loggedInUser.id,
                              (openedSubtitles / parseFloat(quizzes.length)) *
                                100 +
                                ""
                            );
                            console.log(change);
                          }
                        }
                      }}
                    >
                      {" "}
                      Next{" "}
                    </Button>
                  </>
                ) : questionGrade ? (
                  <>
                    <p className="login-header">
                      {" "}
                      You scored {questionGrade} out of {quizGrade}{" "}
                    </p>
                    <p className="login-header">
                      {" "}
                      the correct answers for the questions were{" "}
                    </p>
                    {correctAnswers.map((answer) => {
                      return <p className="login-header">{answer}</p>;
                    })}
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>error 401: unauthorized access</p>
      )}
    </div>
  );
}
