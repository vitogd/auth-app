import { Router, Request, Response, NextFunction } from "express";
import { HttpError } from "http-errors";
import createHttpError = require("http-errors");
import userRoutes from "./user.routes";

const routes = Router();

routes.get("/", (request: Request, response: Response) => {
  return response.status(200).json({
    message: "Hello world!",
  });
});

routes.use("/users", userRoutes);

routes.use((request: Request, response: Response, next: NextFunction) => {
  const error = new createHttpError.NotFound();
  next(error);
});

routes.use(function (
  error: HttpError,
  request: Request,
  response: Response,
  next: NextFunction
) {
  response.status(error.status);
  response.json({
    error: {
      status: error.status,
      message: error.message,
    },
  });
});

export default routes;
