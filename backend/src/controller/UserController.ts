import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import createHttpError = require("http-errors");

import UserService from "../services/UserService";

class UserController {
  async getAll(request: Request, response: Response, next: NextFunction) {
    response.status(200).json(await UserService.findAll());
  }

  async dashboard(request: Request, response: Response, next: NextFunction) {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      throw new createHttpError.BadRequest();
    }

    const user = await UserService.findOne(request.userID);

    response.status(200).json({ message: "user authenticated", user });
  }

  async getOne(request: Request, response: Response, next: NextFunction) {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      throw new createHttpError.BadRequest();
    }

    const res = await UserService.findOne(request.params.id);

    if (!res) {
      throw new createHttpError.NotFound();
    }

    response.status(200).json(res);
  }

  async update(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params;

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      throw new createHttpError.BadRequest();
    }

    const usersUpdated = await UserService.update(id, request.body);

    if (!usersUpdated) {
      throw new createHttpError.NotFound();
    }

    response.status(200).json(usersUpdated);
  }

  async delete(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params;

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      throw new createHttpError.BadRequest();
    }

    const usersDeleted = await UserService.delete(id);

    if (!usersDeleted) {
      throw new createHttpError.NotFound();
    }

    response.status(200).json({
      message: "user deleted",
    });
  }
}

export default new UserController();
