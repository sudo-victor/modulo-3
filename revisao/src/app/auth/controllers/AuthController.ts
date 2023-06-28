import { Request, Response } from "express";
import { makeLoginSchema } from "../schemas/loginSchema";
import { AuthService } from "../services/AuthService";

class AuthController {
  constructor(private service: AuthService) {}

  async login(req: Request, res: Response) {
    const { body } = req;

    try {
      await makeLoginSchema().validate(body)
    } catch (err: any) {
      return res.status(400).json({ errors: err.errors})
    }

    const result = await this.service.login(body) as any
    if('error' in result) {
      return res.status(result.status).json(result)
    }

    return res.status(200).json(result)
  }

}

export { AuthController }