import { Router } from "express";
import { createScheduleController, readAllScheduleRealEstateController } from "../controller/schedule.controller";
import { validateBody, verifyAdmin, verifyToken } from "../middlewares/globals.middleware";
import { createNewScheduleSchema } from "../schemas/schedules.schema";
import { verifyRealEstateExists, verifyUserScheduleExists, verifyrealEstateScheduleExists } from "../middlewares/schedules.middleware";

export const schedulesRouter: Router = Router();

schedulesRouter.post('/',
    verifyToken,
    validateBody(createNewScheduleSchema),
    verifyRealEstateExists,
    verifyrealEstateScheduleExists,
    verifyUserScheduleExists,
    createScheduleController
);
schedulesRouter.get('/realEstate/:id', verifyToken, verifyAdmin, readAllScheduleRealEstateController);
