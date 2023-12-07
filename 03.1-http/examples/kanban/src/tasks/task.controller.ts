import { Request, Response } from "express";
import { TaskService } from "./task.service";

export class TaskController {
  constructor(private service: TaskService) {}

  async create(req: Request, res: Response) {
    const { params, body } = req

    const payload = {
      title: body.title,
      content: body.content,
      userId: params.userId
    }

    const result = await this.service.create(payload)
    if ((result as { error: boolean }).error) {
      return res.status((result as { status: number }).status).json(result)
    }

    return res.status(201).json(result)
  }

  async updateStatus(req: Request, res: Response) {
    // id da task e status
    // headers, params, query e body
    const { params, body } = req

    const payload = {
      taskId: params.taskId,
      status: body.status
    }

    const result = await this.service.updateStatus(payload)
    if ((result as { error: boolean }).error) {
      return res.status((result as { status: number }).status).json(result)
    }

    return res.status(200).json(result)
  }

}