import { Request, Response } from "express";
import { TaskService } from "../services/TaskService";
import { makeCreateTaskSchema } from "../schemas/createTaskSchema";

class TaskController {
  constructor(
    private service: TaskService,
  ) {}

  async create(req: Request, res: Response) {
    const { body, params: { board_id } } = req

    try {
      await makeCreateTaskSchema().validate(body)
    } catch (error: any) {
      return res.status(400).json({ errors: error.errors })
    }

    const result = await this.service.create({ ...body, boardId: board_id }) as any
    if ('error' in result) {
      return res.status(result.status).json(result)
    }

    return res.status(201).json(result)
  }
}

export { TaskController }