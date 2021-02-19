import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { validationResult } from "express-validator";
import createHttpError = require("http-errors");

import { UserRepository } from "../repositories/UserRepository";
import * as jwt from "../config/jwt";
import { compare } from "bcryptjs";

class AuthController {
  async register(request: Request, response: Response, next: NextFunction) {
    const repository = getCustomRepository(UserRepository);

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      throw new createHttpError.BadRequest();
    }

    const { name, email, password } = request.body;

    const userExists = await repository.findByEmail(email);

    if (userExists) {
      throw new createHttpError.Conflict();
    }

    const user = repository.create({ name, email, password });
    await repository.save(user);

    response.status(201).json(user);
  }

  async login(request: Request, response: Response, next: NextFunction) {
    const repository = getCustomRepository(UserRepository);
    const { email, password } = request.body;

    const user = await repository.findByEmail(email);

    if (!user) {
      throw new createHttpError.NotFound();
    }

    const passwordMatch = compare(password, user.password);

    if (!passwordMatch) {
      throw new createHttpError.Unauthorized();
    }

    const token = jwt.sign({ user: user.id });

    response.status(201).json({ user, token });
  }
}

export default new AuthController();
