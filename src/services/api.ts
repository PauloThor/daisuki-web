import axios from "axios";

export const daisukiApi = axios.create({
  baseURL: "https://animedaisuki.herokuapp.com/api",
});
