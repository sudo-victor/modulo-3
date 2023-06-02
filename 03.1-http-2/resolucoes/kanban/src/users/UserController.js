import yup from "yup"

export class UserController {
  constructor(service) {
    this.service = service;
  }

  async create(req, res) {
    const { body } = req

    const userSchema = yup.object().shape({
      name: yup.string().required("Voce esqueceu do nome, idiota"),
      email: yup.string().email().required()
    })

    try {
      await userSchema.validate(body)
    } catch(err) {
      return res.status(400).json({ error: true, errorsMessage: err.errors })
    }

    const result = await this.service.create(body)
    if('error' in result) {
      return res.status(result.status).json(result)
    }

    return res.status(200).json(result)
  }
}