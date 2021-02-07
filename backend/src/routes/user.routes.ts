import { Router } from "express";

import UserController from "../controller/UserController";

const userRoutes = Router();

userRoutes.get("/", UserController.getAll);

userRoutes.get("/:id", UserController.getOne);

userRoutes.post("/", UserController.create);

userRoutes.put("/:id", UserController.update);

userRoutes.delete("/:id", UserController.delete);

export default userRoutes;
