import AppError from "../errors/AppErrors.error";
import { Category } from "../entities";
import { CreateCategory, ReadAllCategories } from "../interfaces/category.interface";
import { categoryRepo } from "../repositories";

export const createCategoryService = async (data: CreateCategory): Promise<Category> => {
    const category: Category = categoryRepo.create(data);
    return await categoryRepo.save(category);
}
export const readCategoryService = async (): Promise<ReadAllCategories> => {
    return await categoryRepo.find();
}

export const readRealEstateByCategoryService = async (id: number): Promise<Category> => {
    const categories: Category | null = await categoryRepo.findOne({
        where: {
            id
        },
        relations: {
            realEstate: true
        }
    });
    if (!categories) throw new AppError('Specialty not found', 404);
    return categories;
}
