import { Request, Response } from "express";
import { AuthService } from "./auth.service";

export class AuthController {
   constructor(private service: AuthService) {}

  async login(req: Request, res: Response) {
    const { body } = req

    const result = await this.service.login(body)
    if ("error" in result) {
      return res.status((result as { status: number }).status).json(result)
    }

    return res.json(result)
  }

} 