export class CarController {
  constructor(service) {
    this.service = service
  }

  async create(req, res) {
    const { body } = req

    await this.service.create(body)

    res.status(201).json()
  }
}
