import { GetRandomValue } from "../../utils/GetRandomValue.js"

class RaffleService { 
  constructor(repository) {
    this.repository = repository
  }

  async create(data) {
    const result = await this.repository.create(data)
    return result
  }

  async generateResult(id) {
    // buscar a rifa pelo id
    const raffle = await this.repository.findById(id)
    if (!raffle) {
      return {
        error: true,
        status: 404,
        message: "Raffle not found"
      }
    }

    // gerar o resultado
    const result = GetRandomValue.between(raffle.min_interval, raffle.max_interval)

    // salvar no banco o resultado e a data
    const raffleUpdated = await this.repository.update(id, { result, drawedAt: new Date() })

    // retornar o valor
    return raffleUpdated
  }

}

export { RaffleService }