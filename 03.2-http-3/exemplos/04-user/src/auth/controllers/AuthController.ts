import { Request, Response } from "express"
import * as yup from "yup"

class AuthController {
  constructor(private service: any) {}

  async login(req: Request, res: Response) {
    const { body } = req

    const bodySchema = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
    })

    try {
      await bodySchema.validate(body)
    } catch(err: any) {
      return res.status(400).json({ error: err.errors })
    }

    const result = await this.service.login(body)
    if ('error' in result) {
      return res.status(result.status).json(result)
    }

    return res.status(200).json(result)
  }
}

export { AuthController }