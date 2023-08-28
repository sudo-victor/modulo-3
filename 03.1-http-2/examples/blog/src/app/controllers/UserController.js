class UserController {
  constructor(service) {
    this.service = service
  }

  async create(req, res) {
    const { body } = req

    const result = await this.service.create(body)

    res.status(201).json(result)
  }

  async index(req, res) {
    const result = await this.service.index()
    res.status(200).json(result)
  }
}

export { UserController }
