import { z } from "zod";
import { AddressSchema } from "./address.schema";

export const RealEstateSchema = z.object({
    id: z.number().positive(),
    value: z.number().or(z.string()).default(0),
    size: z.number().int().positive(),
    createdAt: z.string(),
    sold: z.boolean().default(false),
    updatedAt: z.string(),
    address: AddressSchema.omit({ id: true }),
    categoryId: z.number().int().positive(),
});

export const createRealEstateSchema = RealEstateSchema.omit({ id: true, createdAt: true, updatedAt: true, sold: true })
