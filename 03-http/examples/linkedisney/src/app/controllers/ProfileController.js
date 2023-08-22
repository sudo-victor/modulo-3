class ProfileController {
  constructor(service) {
    this.service = service
  }

  async create(req, res) {
    const { body } = req

    const result = await this.service.create(body)

    res.json(result)
  }
}

export { ProfileController }