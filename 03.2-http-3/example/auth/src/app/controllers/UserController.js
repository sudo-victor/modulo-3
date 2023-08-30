import * as yup from "yup"

class UserController {
  constructor(service) {
    this.service = service
  }

  async create(req, res) {
    const { body } = req

    const userSchema = yup.object().shape({
      fullname: yup.string().required(),
      nickname: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().required(),
    })

    try {
      await userSchema.validate(body)
    } catch (err) {
      return res.status(400).json({ error: true, message: err.errors, status: 400 })
    }

    const result = await this.service.create(body)
    if ('error' in result) {
      return res.status(result.status).json(result)
    }

    return res.status(201).json(result)
  }

}

export { UserController }