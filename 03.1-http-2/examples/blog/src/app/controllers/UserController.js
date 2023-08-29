import * as yup from "yup"

class UserController {
  constructor(service) {
    this.service = service
  }

  async create(req, res) {
    const { body } = req

    const bodySchema = yup.object().shape({
      fullname: yup.string().min(5).required(),
      nickname: yup.string().min(2).required(),
      password: yup.string().required(),
      email: yup.string('Tem que ser string').email('Tem que ser e-mai').required('É obrigatorio'),
    })

    try {
      await bodySchema.validate(body)
    } catch (objError) {
      return res.status(400).json(objError.errors)
    }
  

    const result = await this.service.create(body)

    return res.status(201).json(result)
  }

  async index(req, res) {
    const result = await this.service.index()
    res.status(200).json(result)
  }
}

export { UserController }
