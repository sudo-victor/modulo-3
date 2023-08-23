class UserController {
  constructor(service) {
    this.service = service
  }

  async create(req, res) {
    const { body } = req

    const result = await this.service.create(body)
    if("error" in result) {
      return res.status(400).json(result)
    }
    // if(result.error) {
    //   return res.status(400).json(result)
    // }

    return res.status(201).json(result)
  }
}

export { UserController }