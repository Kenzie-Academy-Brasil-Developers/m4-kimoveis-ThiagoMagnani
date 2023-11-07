import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppErrors.error";

import { categoryRepo } from "../repositories";
import Category from "../entities/category.entity";

export const verifyUniqueCategoryName = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { name } = req.body
    const categories: Category | null = await categoryRepo.findOneBy({ name })
    if (categories) throw new AppError('Category already exists', 409)
    return next()
}

export const verifyCategoriesExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params
    const categories: Category | null = await categoryRepo.findOneBy({ id: Number(id) })
    if (!categories) throw new AppError('Category not found', 404)
    return next()
}
