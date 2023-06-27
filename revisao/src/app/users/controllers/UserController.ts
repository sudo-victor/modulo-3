import { Request, Response } from "express";
import { UserService } from "../services/UserService";
import { makeCreateUserSchema } from "../schemas/createUserSchema";

class UserController {
  constructor(private service: UserService) {}

  async create(req: Request, res: Response) {
    const { body } = req

    try {
      await makeCreateUserSchema().validate(body)
    } catch(err: any) {
      return res.status(400).json({ errors: err.errors })
    }


    const result = await this.service.create(body) as any
    if('error' in result) {
      return res.status(result.status).json(result)
    }

    return res.status(201).json(result)
  }
}

export { UserController }