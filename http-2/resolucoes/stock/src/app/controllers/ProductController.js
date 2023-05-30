export class ProductController {
  constructor(service) {
    this.service = service;
  }

  async create(req, res) {
    const { body } = req

    const result = await this.service.create(body)

    res.status(201).json({ data: result })
  }

  async incrementAmount(req, res) {
    const { params } = req

    const result = await this.service.incrementAmount(params.id)

    res.status(201).json({ data: result })
  }
}