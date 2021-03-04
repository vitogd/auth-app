import { Router } from "express";
import { body } from "express-validator";
import AuthController from "../controller/AuthController";
import CatchAsync = require("../middlewares/CatchAsync");

const authRoutes = Router();

authRoutes.post(
  "/register",
  body("name").isString(),
  body("email").isEmail(),
  body("password").isString(),
  CatchAsync(AuthController.register)
);

authRoutes.post(
  "/login",
  body("email").isEmail(),
  body("password").isString(),
  CatchAsync(AuthController.login)
);

authRoutes.get(
  "/verify",
  body("token").isString(),
  CatchAsync(AuthController.verify)
);

export default authRoutes;
