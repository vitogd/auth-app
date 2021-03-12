import { Router } from "express";
import { body, header, param } from "express-validator";

import UserController from "../controller/UserController";
import CatchAsync = require("../middlewares/CatchAsync");

const userRoutes = Router();

userRoutes.get("/", CatchAsync(UserController.getAll));

userRoutes.get(
  "/:id",
  param("id").isUUID("4"),
  CatchAsync(UserController.getOne)
);

userRoutes.put(
  "/:id",
  param("id").isUUID("4"),
  CatchAsync(UserController.update)
);

export default userRoutes;
