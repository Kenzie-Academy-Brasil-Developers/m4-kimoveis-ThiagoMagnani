import { z } from "zod";
import { Repository } from "typeorm";
import { Category } from "../entities";
import { createCategorySchema, readAllCategoriesSchema } from "../schemas/category.schema";

export type CreateCategory = z.infer<typeof createCategorySchema>
export type ReadAllCategories = z.infer<typeof readAllCategoriesSchema>
export type CategoryRepo = Repository<Category>
