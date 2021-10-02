import axios from "axios";

export const daisukiApi = axios.create({
  baseURL: "/api",
});
