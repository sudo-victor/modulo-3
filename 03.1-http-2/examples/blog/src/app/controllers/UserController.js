class UserController {
  constructor(service) {
    this.service = service
  }

  async create(req, res) {
    const { body } = req

    const result = await this.service.create(body)

    res.status(201).json(result)
  }
}

export { UserController }
