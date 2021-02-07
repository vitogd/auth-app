import { Request, Response, Router } from "express";

const routes = Router();

routes.get("/", (request: Request, response: Response) => {
  return response.status(200).json({
    message: "Hello world!",
  });
});

export default routes;
