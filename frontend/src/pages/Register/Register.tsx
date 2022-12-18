import React from "react";
import Header from "../../components/header";
import "../../Styling/mainLayout.css";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import CourseVideo from "../../components/Course/CourseVideo";
import { extractIdFromVideoUrl } from "../../utils/video_utils";
function Register() {
  const [type, setType] = React.useState("");
  const [videoId, setVideoId] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  const verifyVideo = () => {
    var id = extractIdFromVideoUrl(
      "https://www.youtube.com/watch?v=k6rl9UA26-0"
    );
    setVideoId(id);
  };

  return (
    <div className="container">
      <Header />
      <div className="body">
        <h2 className="title"> I want to register as a..</h2>
        <Select
          className="selector"
          value={type}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"/corpTraineeRegister"}>Corporate Trainee</MenuItem>
          <MenuItem value={"/indivTraineeRegister"}>
            Individual Trainee
          </MenuItem>
          <MenuItem value={"/instructorRegister"}>Instructor</MenuItem>
        </Select>
        <Link to={type} style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            id="filled-button"
            onClick={verifyVideo}
            style={{ width: "400px", marginTop: "50px", marginLeft: "70vw" }}
          >
            {" "}
            Continue{" "}
          </Button>
        </Link>
      </div>
      <p> {videoId} </p>
      {videoId !== '' ? <CourseVideo embedId={videoId} /> : <div/>}
    </div>
  );
}

export default Register;
