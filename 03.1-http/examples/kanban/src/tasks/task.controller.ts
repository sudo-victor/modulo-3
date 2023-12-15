import * as yup from "yup"
import { Request, Response } from "express";
import { TaskService } from "./task.service";
import { UserNotFoundError } from "../shared/errors/user-not-found.error";
import { HTTP_STATUS } from "../shared/enums/http-status.enum";
import { createTaskValidateSchema } from "./task.validate-schema";
// throw new Error
export class TaskController {
  constructor(private service: TaskService) {}

  async create(req: Request, res: Response) {
    const { params, body } = req

    const payload = {
      title: body.title,
      content: body.content,
      userId: params.userId
    }

    try {
      await createTaskValidateSchema().validate(payload)
    } catch (err: any) {
      return res.status(HTTP_STATUS.CLIENTE_FEZ_M).json({
        messages: err.errors
      })
    }

    try {
      const result = await this.service.create(payload)
      
      return res.status(HTTP_STATUS.CREATED).json(result)
    } catch (err: any) {
      if (err instanceof UserNotFoundError) {
        return res.status(HTTP_STATUS.NOT_FOUND_ERROR).json({ 
          message: err.message
        })
      }

      return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message: "Internal server error" })
    }
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

  async list(req: Request, res: Response) {
    const result = await this.service.list()

    res.json(result)
  }
}

