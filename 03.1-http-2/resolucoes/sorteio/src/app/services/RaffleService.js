import { getRandom } from "../../utils/functions/getRandom.js"

export class RaffleService {
  constructor(respository) {
    this.respository = respository
  }

  async create(body) {
    return this.respository.create(body)
  }

  async generateRandomValue(id) {
    // Validar se existe a rifa
    const raffleExists = await this.respository.findById(id)
    if(!raffleExists) {
      return {
        error: true,
        message: 'Raffle not found',
        status: 404
      }
    }

    // Sortear o number
    const randomValue = getRandom(raffleExists.valueMin, raffleExists.valueMax)

    // Atualizar o dado
    const payload = {
      finalValue: randomValue,
      doneAt: new Date()
    }

    return this.respository.update(id, payload)
  }
}