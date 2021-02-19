import { NextFunction, Request, Response } from "express";
import createHttpError = require("http-errors");
import { getRepository } from "typeorm";

import * as jwt from "../config/jwt";
import { User } from "../entity/User";

export = async (request: Request, response: Response, next: NextFunction) => {
  const [, token] = request.headers.authorization.split(" ");

  const payload = await jwt.verify(token);

  const user = await getRepository(User).findOne((<any>payload).user);

  if (!user) {
    throw new createHttpError.NotFound();
  }

  request.userID = user.id;

  response.status(202).set("user", user.id);
  next();
};
