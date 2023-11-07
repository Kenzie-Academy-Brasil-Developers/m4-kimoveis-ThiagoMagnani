import { AppDataSource } from "./data-source";
import { Address, Category, RealEstate, Schedule, User } from "./entities";
import { CategoryRepo } from "./interfaces/category.interface";
import { AddressRepo, RealEstateRepo } from "./interfaces/realEstate.interface";
import { ScheduleRepo } from "./interfaces/schedules.interface";
import { UserRepo } from "./interfaces/user.interface";

export const addressRepo: AddressRepo = AppDataSource.getRepository(Address)
export const realEstateRepo: RealEstateRepo = AppDataSource.getRepository(RealEstate)
export const scheduleRepo: ScheduleRepo = AppDataSource.getRepository(Schedule)
export const userRepo: UserRepo = AppDataSource.getRepository(User);
export const categoryRepo: CategoryRepo = AppDataSource.getRepository(Category);
