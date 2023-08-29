import * as yup from "yup"

class AuthController {
  constructor(service) {
    this.service = service
  }

  async login(req, res) {
    const { body } = req

    const result = await this.service.login(body)

    return res.json(result)
  }
}

export { AuthController }
