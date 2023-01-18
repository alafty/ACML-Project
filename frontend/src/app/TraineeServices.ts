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

const TraineeServices = {
    getMyProblems,
}
export default TraineeServices;
