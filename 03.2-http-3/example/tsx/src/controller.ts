import { Request, Response } from "express";

export class UserController {
  constructor(
    private service: any
  ) {}

  create(req: Request, res: Response) {
    const { body } = req

    // const result = this.service.create(body)

    res.json({ ok: true })
  }

}

const constroller = new UserController({})
