import { Request, Response } from "express";
import { ItemsService } from "../service/itemsService";

export class ItemsController {
  service: ItemsService;
  
  constructor(service: ItemsService) {
    this.service = service;
  }

  async create(req: Request, res: Response) {
    const { body } = req;

    // validar o body
    if (!(body?.title && body?.description && body?.location && body?.city && body?.phoneNumber)) {
      return res.status(400).json({ message: "Invalid body"})
    }

    // criar o item
    const result = await this.service.create(body)

    // retorna a resposta pro cliente
    res.status(200).json({ data: result })
  }

  async updateDonateStatus(req: Request, res: Response) {
    const { id = null } = req.params

    if(!id) {
      return res.status(400).json({ message: "Invalid id" })
    }

    const result = await this.service.updateDonateStatus(id)
    if('error' in result) {
      return res.status(400).json({ message: result.message })
    }

    return res.status(204).json()
  }

  async getAll(req: Request, res: Response) {
    const { city = null } = req.query

    const result = await this.service.getAll(city as string | null)

    res.status(200).json({ data: result })
  }
}