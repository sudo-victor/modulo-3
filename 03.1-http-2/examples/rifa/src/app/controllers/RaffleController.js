class RaffleController {
  constructor(service) {
    this.service = service
  }

  async create(req, res) {
    const { body } = req

    const result = await this.service.create(body)

    res.status(201).json(result)
  }

  async generateResult(req, res) {
    const { params } = req

    if (!("id" in params)) {
      res.status(400).json({ 
        error: true,
        message: "Id not informed"
      })
    }

    const result = await this.service.generateResult(params.id)

    res.status(200).json(result)
  }
}

export { RaffleController }