import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import createHttpError = require("http-errors");
import { compare } from "bcryptjs";

import * as jwt from "../config/jwt";
import UserService from "../services/UserService";

class AuthController {
  async register(request: Request, response: Response, next: NextFunction) {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      throw new createHttpError.BadRequest();
    }

    const { name, email, password } = request.body;

    const userExists = await UserService.findByEmail(email);

    if (userExists) {
      throw new createHttpError.Conflict();
    }

    const user = await UserService.create({ name, email, password });

    response.status(201).json(user);
  }

  async login(request: Request, response: Response, next: NextFunction) {
    const { email, password } = request.body;

    const user = await UserService.findByEmail(email);

    if (!user) {
      throw new createHttpError.NotFound();
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new createHttpError.Unauthorized();
    }

    const token = jwt.sign({ user: user.id });

    response.status(201).json({ user, token });
  }
}

export default new AuthController();
