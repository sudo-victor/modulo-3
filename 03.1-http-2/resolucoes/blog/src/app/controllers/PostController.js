export class PostController {
  constructor(service) {
    this.service = service;
  }

  async create(req, res) {
    // const { params: { id }, body } = req
    const { params, body } = req

    const result = await this.service.create(params.user_id, body)

    return res.status(201).json({ result })
  }
}