import { Request, Response } from 'express'
import { createRealEstateService, readRealEstateService } from '../services/realEstate.services'

export const createRealEstateController = async (req: Request, res: Response): Promise<Response> => {
    const clinic = await createRealEstateService(req.body);
    return res.status(201).json(clinic);
}

export const readAllRealEstateController = async (req: Request, res: Response): Promise<Response> => {
    const clinics = await readRealEstateService();
    return res.status(200).json(clinics);
}
