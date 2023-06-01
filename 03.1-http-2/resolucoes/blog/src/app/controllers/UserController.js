export class UserController {
  constructor(service) {
    this.service = service;
  }

  async findAll(req, res) {
    const result = await this.service.findAll()
    return res.status(200).json({ result })
  }

  async create(req, res) {
    const { body } = req

    const result = await this.service.create(body)
    if('error' in result) {
      return res.status(400).json({ error: true, message: result.message })
    }

    return res.status(201).json({ result })
  }
}