import { Router } from "express";
import { body, header, param } from "express-validator";

import UserController from "../controller/UserController";
import AuthMiddleware = require("../middlewares/AuthMiddleware");
import CatchAsync = require("../middlewares/CatchAsync");

const userRoutes = Router();

userRoutes.get("/", CatchAsync(UserController.getAll));

userRoutes.get(
  "/dashboard",
  CatchAsync(AuthMiddleware),
  CatchAsync(UserController.dashboard)
);

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

userRoutes.delete(
  "/:id",
  param("id").isUUID("4"),
  CatchAsync(UserController.delete)
);

export default userRoutes;
