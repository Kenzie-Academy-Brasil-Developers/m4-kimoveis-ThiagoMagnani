import { z } from "zod";
import { Repository } from "typeorm";
import { Schedule } from "../entities";
import { createNewScheduleSchema } from "../schemas/schedules.schema";

export type CreateSchedule = z.infer<typeof createNewScheduleSchema>
export type ScheduleRepo = Repository<Schedule>
