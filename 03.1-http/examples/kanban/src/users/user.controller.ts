import { Request, Response } from "express";
import { CreateUserResponse, UserService } from "./user.service";

export class UserController {
  constructor(private service: UserService) {}

  async create(req: Request, res: Response) {
    const { body } = req

    const result = await this.service.create(body)
    if ((result as CreateUserResponse).error) {
      return res.status((result as CreateUserResponse).status).json(result)
    }

    res.status(201).json(result)
  }

}