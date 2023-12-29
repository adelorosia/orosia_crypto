import axios from "axios";
import { TUser } from "../interfaces";

const SERVER_URL = "https://crypto-2m5o.onrender.com";

export const registerUser = (user: TUser) => {
  const url = `${SERVER_URL}/api/register`;
  return axios.post(url, user);
};
