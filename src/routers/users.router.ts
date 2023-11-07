import { Router } from "express";
import { createUserController, deleteUserController, readAllUsersController, updateUserController } from "../controller/user.controller";
import { validateBody, verifyAdmin, verifyPermissions, verifyToken } from "../middlewares/globals.middleware";
import { createUserSchema, updateUserSchema } from "../schemas/user.schema";
import { verifyUniqueUserEmail, verifyUserExists } from "../middlewares/user.middleware";

export const userRouter: Router = Router();

userRouter.post('/', validateBody(createUserSchema), verifyUniqueUserEmail, createUserController);
userRouter.get('/', verifyToken, verifyAdmin, readAllUsersController);
userRouter.patch('/:id', validateBody(updateUserSchema), verifyUserExists, verifyToken, verifyPermissions, updateUserController);
userRouter.delete('/:id', verifyToken, verifyUserExists, verifyPermissions, deleteUserController);
