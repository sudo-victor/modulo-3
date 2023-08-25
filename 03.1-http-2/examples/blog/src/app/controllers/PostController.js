class PostController {
  constructor(service) {
    this.service = service
  }

  async create(req, res) {
    const { body, params: { id } } = req

    const result = await this.service.create(id, body)
    if("error" in result) {
      return res.status(result.status).json(result)
    }
    // if(result.error) {
    //   return res.status(result.status).json(result)
    // }


    res.status(201).json(result)
  }
}

export { PostController }
