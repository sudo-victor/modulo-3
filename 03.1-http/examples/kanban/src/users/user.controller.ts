import { Request, Response } from "express";
import { UserService } from "./user.service";
import { UserAlreadyExistsError } from "../shared/errors/user-already-exists.error";
import { HTTP_STATUS } from "../shared/enums/http-status.enum";

export class UserController {
  constructor(private service: UserService) {}

  async create(req: Request, res: Response) {
    const { body } = req

    try {
      const result = await this.service.create(body)

      res.status(HTTP_STATUS.CREATED).json(result)
    } catch (err: any) {
      if (err instanceof UserAlreadyExistsError) {
        return res.status(HTTP_STATUS.BAD_REQUEST).json({ message: err.message })
      }

      return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message: "Internal server error" })
    }
  }

}