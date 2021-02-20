import { NextFunction, Request, Response } from "express";
import createHttpError = require("http-errors");

export = async (request: Request, response: Response, next: NextFunction) => {
  const apiKey = request.headers["x-api-key"];

  if (apiKey != process.env.API_KEY) {
    throw new createHttpError.Unauthorized();
  }

  response.status(200);
  next();
};
