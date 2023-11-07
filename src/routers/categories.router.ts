import { Router } from "express";
import { createCategoryController, readCategoryController, readRealEstateByCategoryController } from "../controller/category.controller";
import { validateBody, verifyAdmin, verifyToken } from "../middlewares/globals.middleware";
import { createCategorySchema } from "../schemas/category.schema";
import { verifyCategoriesExists, verifyUniqueCategoryName } from "../middlewares/category.middleware";

export const categoryRouter: Router = Router();

categoryRouter.post('/',
    validateBody(createCategorySchema),
    verifyToken,
    verifyUniqueCategoryName,
    verifyAdmin,
    createCategoryController
);
categoryRouter.get('/', readCategoryController);
categoryRouter.get('/:id/realEstate', verifyCategoriesExists, readRealEstateByCategoryController);
