import axios from "axios";
import { API_BASE_URL } from "../constants/app_config";

export default axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  // withCredentials: true,
});
