import { Router } from "express";
import { body, param } from "express-validator";

import UserController from "../controller/UserController";

const userRoutes = Router();

userRoutes.get("/", UserController.getAll);

userRoutes.get("/:id", param("id").isUUID("4"), UserController.getOne);

userRoutes.post(
  "/",
  body("name").isString(),
  body("email").isEmail(),
  body("password").isString(),
  UserController.create
);

userRoutes.put("/:id", param("id").isUUID("4"), UserController.update);

userRoutes.delete("/:id", param("id").isUUID("4"), UserController.delete);

export default userRoutes;
