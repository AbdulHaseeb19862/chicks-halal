import axios from "axios";

export const BASE_URL = "http://localhost:3007";

export const API_URL = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});
