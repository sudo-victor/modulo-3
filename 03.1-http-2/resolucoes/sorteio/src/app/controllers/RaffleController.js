export class RaffleController {
  constructor(service) {
    this.service = service;
  }

  async create(req, res) {
    const { body } = req

    const result = await this.service.create(body)

    res.status(201).json(result)
  }

  async generateRandomValue(req, res) {
    const { id = null } = req.params

    if(!id) {
      return res.status(400).json({ message: 'Invalid id' })
    }

    const result = await this.service.generateRandomValue(id)
    if ('error' in result) {
      return res.status(result.status).json(result)
    }
  
    res.status(200).json(result)
  }
}