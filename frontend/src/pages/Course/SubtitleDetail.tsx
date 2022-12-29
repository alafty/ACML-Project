import React, { useEffect, useState } from "react";
import courseServices from "../../app/CoursesServices";
import { useParams } from "react-router-dom";
import CourseVideo from "../../components/Course/CourseVideo";
import { extractIdFromVideoUrl } from "../../utils/video_utils";

export default function SubtitleDetail() {
  const { id, subId } = useParams();
  const [subDetails, setSubDetails] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [videoState, setVideoState] = useState("");

  const [description, setDescription] = useState("");
  const [descriptionState, setDescriptionState] = useState("");

  useEffect(() => {
    courseServices.getCourseDetails(id).then((data) => {
      var subtitles = data?.Subtitles as [any];
      if (subtitles) {
        var sub = subtitles.find((e) => e._id == subId);
        setSubDetails(sub);
      }
    });
  }, []);

  const handleSubmit = async () => {
    try {
      const vidId = videoUrl !== "" ? extractIdFromVideoUrl(videoUrl) : null;
      const desc = description !== "" ? description : null;
      courseServices
        .updateSubtitle(id, subId, { videoId: vidId, description: description })
        .then((data) => {
          var newSub = subDetails;
          if (vidId) {
            newSub.VideoId = vidId;
            setVideoState("Success!");
            setVideoUrl("");
          }
          if (desc) {
            newSub.Description = desc;
            setDescriptionState("Success!");
            setDescription("");
          }
          setSubDetails(newSub);
        });
    } catch {
      setVideoState("Make sure url is valid");
    }
  };
  return (
    <div>
      <p>{JSON.stringify(subDetails)}</p>
      <p>{subDetails?.Description}</p>
      {<CourseVideo embedId={subDetails?.VideoId} />}
      <input
        type="text"
        placeholder="VideoURL upload"
        name="VideoURL"
        onChange={(e) => setVideoUrl(e.target.value)}
        value={videoUrl}
        required
      />
      <button type="submit" onClick={handleSubmit}>
        Upload url
      </button>
      <p>{videoState}</p>
      <input
        type="text"
        placeholder="Description Edit"
        name="Description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        required
      />
      <button type="submit" onClick={handleSubmit}>
        Upload url
      </button>
      <p>{descriptionState}</p>
    </div>
  );
}
