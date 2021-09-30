import axios from "axios";

export const daisukiApi = axios.create({
  baseURL: "localhost:5000/api",
});
