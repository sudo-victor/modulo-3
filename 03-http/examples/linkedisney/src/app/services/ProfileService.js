class ProfileService {
  constructor(repository) {
    this.repository = repository
  }

  async create(data) {
    const result = await this.repository.create(data)
    return result
  }
}

export { ProfileService }