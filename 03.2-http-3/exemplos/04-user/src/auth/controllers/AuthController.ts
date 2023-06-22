import { Request, Response } from "express";
import { makeLoginSchema } from "../schemas/loginSchema";
import { AuthService } from "../services/AuthService";

class AuthController {
  constructor(private service: AuthService) {}

  async login(req: Request, res: Response) {
    const { body } = req

    const bodySchema = makeLoginSchema()

    try {
      await bodySchema.validate(body)
    } catch (err: any) {
      return res.status(400).json({ error: err.errors })
    }

    const result = await this.service.login(body)
    if('error' in result) {
      return res.status(result.status).json(result)
    }

    return res.status(200).json(result)
  }
}

export { AuthController }