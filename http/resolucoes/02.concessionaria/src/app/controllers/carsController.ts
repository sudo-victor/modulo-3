import { Request, Response } from "express";
import { CarsService } from "../services/carsService";

export class CarsController {
  service: CarsService;
  constructor(service: CarsService) {
    this.service = service;
  }

  async create(req: Request, res: Response) {
    const { body } = req
    
    const result = await this.service.create(body)

    res.status(201).json({ data: result })
  }

  async updateIsSold(req: Request, res: Response) {
    const { params: { id = null } } = req

    if (!id) {
      return res.status(400).json({ error: true, message: 'Invalid id' })
    }

    const result = await this.service.updateIsSold(id) as any
    if('error' in result) {
      res.status(400).json({ message: result.message })
    }

    res.status(204).json()
  }

  async findByPlate(req: Request, res: Response) {
    // const plate = req.params.plate
    const { params: { plate = null }} = req

    if(!plate) {
      return res.status(400).json({ message: 'Invalid plate' })
    }

    const result = await this.service.findByPlate(plate)

    if ('error' in result) {
      res.status(400).json({ message: result.message })
    }

    res.status(200).json({ data: result })
  }
}
