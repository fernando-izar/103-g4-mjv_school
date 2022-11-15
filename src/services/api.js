import axios from "axios";

export const api = axios.create({
  baseURL: "https://fakestoreapi.com/doc",
  timeout: 5000,
});
