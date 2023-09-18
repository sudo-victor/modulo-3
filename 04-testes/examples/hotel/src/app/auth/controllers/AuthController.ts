import { Request, Response } from "express";
import * as yup from "yup"
import { makeError } from "../../../utils/makeError";

class AuthController {
  constructor(private service: any) {}


  async login(req: Request, res: Response) {
    const { body } = req

    const bodyValidation = yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
    })

    try {
      await bodyValidation.validate(body)
    } catch(e: any) {
      return res.status(400).json(makeError(e.errors, 400))
    }

    const result = await this.service.login(body)
    if("error" in result) {
      return res.status(result.status).json(result)
    }

    return res.status(200).json(result)
  }
}

export { AuthController }