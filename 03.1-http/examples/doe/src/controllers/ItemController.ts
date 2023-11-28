import { Request, Response } from "express";

export class ItemService {
  create() {}
}

export class ItemController {
  constructor(private service: ItemService) {}

  async create(req: Request, res: Response) { this.service.create() }
}
