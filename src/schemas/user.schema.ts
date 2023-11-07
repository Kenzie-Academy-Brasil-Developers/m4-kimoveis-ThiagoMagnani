import { z } from "zod";

const UserSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(45),
    email: z.string().email().max(45),
    admin: z.boolean().default(false),
    password: z.string().max(120),
    createdAt: z.date().or(z.string()),
    updatedAt: z.date().or(z.string()),
    deletedAt: z.date().or(z.string()).nullable(),
});

export const createUserSchema = UserSchema.pick({
    name: true,
    email: true,
    password: true,
    admin: true
})

export const userWithoutAdmin = createUserSchema.omit({ admin: true })
export const updateUserSchema = userWithoutAdmin.partial()
export const userReturnSchema = UserSchema.omit({ password: true });
export const userReadSchema = UserSchema.array();
export const userListSchema = userReturnSchema.array();
export const userLoginSchema = UserSchema.pick({
    email: true,
    password: true
})
