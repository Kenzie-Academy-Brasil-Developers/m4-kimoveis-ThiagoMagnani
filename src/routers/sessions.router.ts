import { Router } from "express";
import { loginController } from "../controller/sessions.controller";

export const loginRouter: Router = Router();

loginRouter.post('/', loginController);
