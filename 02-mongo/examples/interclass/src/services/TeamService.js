class TeamService {
  constructor(repository) {
    this.repository = repository
  }

  async create(data) {
    const teamAlreadyExists = await this.repository.findByName(data.name)
    if (teamAlreadyExists) {
      return "Name already exists"
    }

    return this.repository.create(data)
  }

  findByCategory(category) {
    return this.repository.findByCategory(category)
  }
}


export { TeamService }