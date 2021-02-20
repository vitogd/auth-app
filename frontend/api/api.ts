import axios from "axios";

require("dotenv").config();

export const api = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    "x-api-key": process.env.API_KEY,
  },
});
