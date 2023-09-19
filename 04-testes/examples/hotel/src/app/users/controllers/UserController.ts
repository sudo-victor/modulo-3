import { Request, Response } from "express";
import * as yup from "yup";
import { UserService } from "../services/UserService";
import { STATUS_CODE } from "../../../utils/statusCode";

class UserController {
  constructor(private service: UserService) {}

  async create(req: Request, res: Response) {
    const { body } = req

    const bodyValidation = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().required(),
    })

    try {
      await bodyValidation.validate(body)
    } catch (error: any) {
      return res.status(400).json({
        message: error.errors,
        error: true,
        status: 400
      })
    }

    const result = await this.service.create(body)
    if ('error' in result) {
      return res.status(result.status).json(result)
    }

    return res.status(201).json(result)
  }

  async findAll(req: Request, res: Response) {
    const result = await this.service.findAll()
    if ('error' in result) {
      return res.status(result.status).json(result)
    }

    return res.status(STATUS_CODE.OK).json(result)
  }

}

export { UserController }