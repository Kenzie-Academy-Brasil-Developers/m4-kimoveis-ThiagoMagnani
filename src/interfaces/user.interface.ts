import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";
import { createUserSchema, userLoginSchema, userReturnSchema } from "../schemas/user.schema";
import { User } from "../entities";

export type UserCreate = z.infer<typeof createUserSchema>;
export type UserReturn = z.infer<typeof userReturnSchema>;
export type UserBodyUpdate = Omit<UserCreate, 'admin'>;
export type UserUpdate = DeepPartial<UserBodyUpdate>;
export type UserReadReturn = UserReturn[];
export type UserLogin = z.infer<typeof userLoginSchema>;
export type LoginReturn = { token: string };
export type UserRepo = Repository<User>;
