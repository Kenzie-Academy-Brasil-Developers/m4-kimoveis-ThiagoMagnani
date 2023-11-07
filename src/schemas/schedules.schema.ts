import { z } from "zod";

export const ScheduleSchema = z.object({
    id: z.number().positive(),
    date: z.string(),
    hour: z.string(),
    realEstateId: z.number().positive(),
    userId: z.number(),
});

export const createNewScheduleSchema = ScheduleSchema.omit({ id: true, userId: true })
