import { NextFunction, Request, Response } from "express";
import { logger } from "./Logger";

export = (fn: Function) => {
  return (request: Request, response: Response, next: NextFunction) => {
    fn(request, response, next).catch(next);
  };
};
