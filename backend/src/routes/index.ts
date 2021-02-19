import { Router, Request, Response, NextFunction } from "express";
import { HttpError } from "http-errors";
import createHttpError = require("http-errors");
import authRoutes from "./auth.routes";
import userRoutes from "./user.routes";

const routes = Router();

routes.get("/", (request: Request, response: Response) => {
  return response.status(200).json({
    message: "Hello world!",
  });
});

routes.use("/users", userRoutes);

routes.use("/auth", authRoutes);

routes.use((request: Request, response: Response, next: NextFunction) => {
  next(new createHttpError.NotFound());
});

routes.use(function (
  error: HttpError,
  request: Request,
  response: Response,
  next: NextFunction
) {
  response.status(error.status || 500);
  response.json({
    error: {
      status: error.status || 500,
      message: error.message,
    },
  });
});

export default routes;
