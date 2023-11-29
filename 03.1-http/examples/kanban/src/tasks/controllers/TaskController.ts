import { Request, Response } from "express";
import { TaskService } from "../services/TaskService";

export class TaskController {
  constructor(private service: TaskService) {}

  async create(req: Request, res: Response) {
    const { body } = req

    const result = await this.service.create(body)
    if (result.error) {
      return res.status(400).json(result)
    }

    return res.status(201).json()
  }

  async index(req: Request, res: Response) {
    const result = await this.service.list()
    res.json(result)
  }
}