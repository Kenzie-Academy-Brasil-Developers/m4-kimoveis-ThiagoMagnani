import AppError from "../errors/AppErrors.error";
import { Address, RealEstate, Category } from "../entities";
import { CreateRealEstate } from "../interfaces/realEstate.interface";
import { addressRepo, categoryRepo, realEstateRepo } from "../repositories";

export const createRealEstateService = async (data: CreateRealEstate): Promise<RealEstate> => {
    const categories: Category | null = await categoryRepo.findOneBy({ id: data.categoryId })
    if (!categories) throw new AppError('Category not found', 404)

    const address: Address = addressRepo.create(data.address)
    await addressRepo.save(address);

    const realEstate: RealEstate = realEstateRepo.create({ ...data, address: address, category: categories })
    await realEstateRepo.save(realEstate);
    return realEstate;
}

export const readRealEstateService = async (): Promise<RealEstate[]> => {
    return await realEstateRepo.find({
        relations: {
            address: true
        }
    })
}
