import { z } from "zod";
import { Repository } from "typeorm";
import { Address, RealEstate } from "../entities";
import { createRealEstateSchema } from "../schemas/realEstate.schema";

export type CreateRealEstate = z.infer<typeof createRealEstateSchema>
export type RealEstateRepo = Repository<RealEstate>
export type AddressRepo = Repository<Address>
