import { Request, Response } from "express"
import { UserService } from "../services/UserService"
import { makeCreateUserSchema } from "../schemas/createUserSchema"
import { makeMeSchema } from "../schemas/meSchema"
import { GetMeDTO } from "../dtos/getMeDto"
import { UserMapper } from "../mappers/UserMapper"

class UserController {
  constructor(private service: UserService) {}

  async create(req: Request, res: Response) {
    const { body, file } = req

    const bodySchema = makeCreateUserSchema()
    
    try {
      await bodySchema.validate(body)
    } catch(err: any) {
      return res.status(400).json({ error: err.errors })
    }

    const photo = { filename: file?.filename, mimetype: file?.mimetype}
    const result = await this.service.create({...body, photo })
    if ('error' in result) {
      return res.status(result.status).json(result)
    }

    return res.status(201).json(result)
  }

  async me(req: Request, res: Response) {
    const { params } = req

    const bodySchema = makeMeSchema()

    try {
      await bodySchema.validate(params)
    } catch(err: any) {
      return res.status(400).json({ error: err.errors })
    }

    const result = await this.service.me(params as any as GetMeDTO) as any
    if('error' in result) {
      return res.status(result.status).json(result)
    }

    return res.status(200).json(result)
  }
}

export { UserController }