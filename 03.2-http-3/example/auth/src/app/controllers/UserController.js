import * as yup from "yup"
import { UserSchemaValidation } from "../../utils/validations/UserSchema.js"
import { CommonError } from "../../utils/CommonError.js"

class UserController {
  constructor(service) {
    this.service = service
  }

  async create(req, res) {
    const { body } = req

    const bodyIsValid = UserSchemaValidation.isValid(body)
    if(bodyIsValid.error) {
      return res.status(400).json(CommonError.build(bodyIsValid.messages, 400))
    }

    const result = await this.service.create(body)
    if ('error' in result) {
      return res.status(result.status).json(result)
    }

    return res.status(201).json(result)
  }

  async findAll(req, res) {
    const result = await this.service.findAll()
    res.json(result)
  }
}

export { UserController }