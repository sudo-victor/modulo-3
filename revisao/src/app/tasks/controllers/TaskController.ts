import { Request, Response } from "express";
import { TaskService } from "../services/TaskService";
import { makeCreateTaskSchema } from "../schemas/createTaskSchema";
import { makeUpdateTaskStatusSchema } from "../schemas/updateTaskStatusSchema";
import { makeDeleteTaskSchema } from "../schemas/deleteTaskSchema";
import { ValidationError } from "yup"
import { makeAssociateATaksSchema } from "../schemas/associateATaskSchema";
import { AssociateAUserDTO } from "../dtos/associateAUserDto";

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

  async updateStatus(req: Request, res: Response) {
    const { body, params: { id } } = req

    const payload = { status: body.status, id }

    try {
      await makeUpdateTaskStatusSchema().validate(payload)
    } catch (error: any) {
      return res.status(400).json({ errors: error.errors })
    }

    const result = await this.service.updateStatus(payload) as any
    if('error' in result) {
      return res.status(result.status).json(result)
    }

    return res.status(200).json(result)
  }

  async delete(req: Request, res: Response) {
    const { params } = req

    try {
      await makeDeleteTaskSchema().validate(params)
    } catch (error: any) {
      return res.status(400).json({ errors: error.errors })
    }

    const result = await this.service.delete(params.id) as any
    if('error' in result) {
      return res.status(result.status).json(result)
    }

    return res.status(200).json(result)
  }

  async associateAUser(req: Request, res: Response) {
    const { params } = req

    try {
      await makeAssociateATaksSchema().validate(params)
    } catch (err: any) {
      return res.status(400).json({ errors: err.errors })
    }

    const result = await this.service.associateAUser(params as any as AssociateAUserDTO) as any
    if('error' in result) {
      return res.status(result.status).json(result)
    }

    return res.status(200).json(result)
  }
}

export { TaskController }