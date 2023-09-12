import { Request, Response } from "express";
import yup from "yup";

class UserController {
  constructor(private service: any) {}

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
}

export { UserController }