import { Request, Response } from "express"

export class AuthController {
  service: any

  constructor(service: any) {
    this.service = service
  }

  async auth(req: Request, res: Response) {
    const { body } = req

    const result = await this.service.auth(body)
    if(result?.error) {
      return res.status(result.status).json(result)
    }

    return res.status(200).json(result)
  }
}