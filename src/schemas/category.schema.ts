import { z } from "zod";

export const CategorySchema = z.object({
    id: z.number().positive(),
    name: z.string().max(45),
});

export const createCategorySchema = CategorySchema.omit({ id: true })
export const readAllCategoriesSchema = CategorySchema.array()
