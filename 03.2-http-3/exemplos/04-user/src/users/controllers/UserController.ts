import { Request, Response } from "express"
import * as yup from "yup"
import { UserService } from "../services/UserService"

class UserController {
  constructor(private service: UserService) {}

  async create(req: Request, res: Response) {
    const { body, file } = req

    const bodySchema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().required(),
    })
    
    try {
      await bodySchema.validate(body)
    } catch(err: any) {
      return res.status(400).json({ error: err.errors })
    }

    const result = await this.service.create({...body, photo: file?.filename })
    if ('error' in result) {
      return res.status(result.status).json(result)
    }

    return res.status(201).json(result)
  }

}

export { UserController }