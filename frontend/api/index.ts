import axios from "axios";

export const api = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "X-API-Key": process.env.API_KEY,
  },
});
