import { getTokenHeader } from "../utils/authUtils";
import httpClient from "../utils/httpClient";

export const getMyProblems = async () => {
  const response = await httpClient.post(
    "/problem/view",
    {},
    { headers: { ...getTokenHeader() } }
  );
  if (response.data) {
    return response.data;
  } else {
    return {};
  }
};

export const createProblem = async (Type: string, Description: string, CourseID: string) => {
  var data = {
    Type: Type,
    Description: Description,
    Course: CourseID
  }
  const response = await httpClient.post(
    "/problem/create",
    data,
    { headers: { ...getTokenHeader() } }
  );
  if (response.data) {
    return response.data;
  } else {
    return {};
  }
};

const TraineeServices = {
  getMyProblems,
  createProblem
};
export default TraineeServices;
