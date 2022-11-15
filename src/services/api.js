import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.spacexdata.com", //exemplo de api - a definir
  timeout: 5000,
});
