import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import createHttpError = require("http-errors");
import { getCustomRepository, getRepository } from "typeorm";

import { User } from "../entity/User";
import { UserRepository } from "../repositories/UserRepository";

class UserController {
  async getAll(request: Request, response: Response, next: NextFunction) {
    const repository = getRepository(User);

    const res = await repository.find();

    response.status(200).json(res);
  }

  async getOne(request: Request, response: Response, next: NextFunction) {
    const repository = getRepository(User);

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      throw new createHttpError.BadRequest();
    }

    const res = await repository.findOne(request.params.id);

    if (!res) {
      throw new createHttpError.NotFound();
    }

    response.status(200).json(res);
  }

  async create(request: Request, response: Response, next: NextFunction) {
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

  async update(request: Request, response: Response, next: NextFunction) {
    const repository = getRepository(User);
    const { id } = request.params;

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      throw new createHttpError.BadRequest();
    }

    const users = await repository.update(id, request.body);

    if (users.affected >= 1) {
      const userUpdated = await repository.findOne(id);
      userUpdated.hashPassword();
      repository.save(userUpdated);

      response.status(200).json(userUpdated);
    }

    throw new createHttpError.NotFound();
  }

  async delete(request: Request, response: Response, next: NextFunction) {
    const repository = getRepository(User);
    const { id } = request.params;

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      throw new createHttpError.BadRequest();
    }

    const userDeleted = await repository.delete(id);

    if (userDeleted.affected >= 1) {
      response.status(200).json({
        message: "user deleted",
      });
    }

    throw new createHttpError.NotFound();
  }
}

export default new UserController();
