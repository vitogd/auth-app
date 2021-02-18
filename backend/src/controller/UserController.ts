import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import createHttpError = require("http-errors");
import { getRepository } from "typeorm";

import { User } from "../entity/User";
import { logger } from "../utils/Logger";

class UserController {
  async getAll(request: Request, response: Response, next: NextFunction) {
    try {
      const repository = getRepository(User);

      const res = await repository.find();

      return response.status(200).json(res);
    } catch (err) {
      logger.error(err.message);
      next(new createHttpError.InternalServerError());
    }
  }

  async getOne(request: Request, response: Response, next: NextFunction) {
    try {
      const repository = getRepository(User);

      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return next(new createHttpError.BadRequest());
      }

      const res = await repository.findOne(request.params.id);

      if (!res) {
        return next(new createHttpError.NotFound());
      }

      return response.status(200).json(res);
    } catch (err) {
      logger.error(err.message);
      next(new createHttpError.InternalServerError());
    }
  }

  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const repository = getRepository(User);

      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return next(new createHttpError.BadRequest());
      }

      const { name, email, password } = request.body;

      const userExists = await repository.findOne({ where: { email } });

      if (userExists) {
        return next(new createHttpError.Conflict());
      }

      const user = repository.create({ name, email, password });
      await repository.save(user);

      return response.status(201).json(user);
    } catch (err) {
      logger.error(err.message);
      next(new createHttpError.InternalServerError());
    }
  }

  async update(request: Request, response: Response, next: NextFunction) {
    try {
      const repository = getRepository(User);
      const { id } = request.params;

      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return next(new createHttpError.BadRequest());
      }

      const users = await repository.update(id, request.body);

      if (users.affected >= 1) {
        const userUpdated = await repository.findOne(id);
        userUpdated.hashPassword();
        repository.save(userUpdated);

        return response.status(200).json({
          message: "user updated",
          data: userUpdated,
        });
      }

      return next(new createHttpError.NotFound());
    } catch (err) {
      logger.error(err.message);
      next(new createHttpError.InternalServerError());
    }
  }

  async delete(request: Request, response: Response, next: NextFunction) {
    try {
      const repository = getRepository(User);
      const { id } = request.params;

      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return next(new createHttpError.BadRequest());
      }

      const userDeleted = await repository.delete(id);

      if (userDeleted.affected >= 1) {
        return response.status(200).json({
          message: "user deleted",
        });
      }

      return next(new createHttpError.NotFound());
    } catch (err) {
      logger.error(err.message);
      next(new createHttpError.InternalServerError());
    }
  }
}

export default new UserController();
