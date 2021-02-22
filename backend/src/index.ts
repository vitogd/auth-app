import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";
import morgan = require("morgan");
require("dotenv").config();
const cors = require("cors");

import routes from "./routes";
import "./database";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use(routes);

app.listen(process.env.API_PORT || 3333, () => {
  console.log("🔥 Server is running!");
});
