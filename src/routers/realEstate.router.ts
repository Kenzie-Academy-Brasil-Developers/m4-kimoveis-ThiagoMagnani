import { Router } from "express";
import { createRealEstateController, readAllRealEstateController } from "../controller/realEstate.controller";
import { validateBody, verifyAdmin, verifyToken } from "../middlewares/globals.middleware";
import { createRealEstateSchema } from "../schemas/realEstate.schema";
import { verifyAddressExists } from "../middlewares/realEstate.middleware";

export const realEstateRouter: Router = Router();

realEstateRouter.post('/',
    verifyToken,
    verifyAdmin,
    validateBody(createRealEstateSchema),
    verifyAddressExists,
    createRealEstateController
);
realEstateRouter.get('/', readAllRealEstateController);
