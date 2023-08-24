import { Raffle } from "../domain/Raffle.js"
import { RaffleRepository } from "../app/repositories/RaffleRepository.js"
import { RaffleService } from "../app/services/RaffleService.js"
import { RaffleController } from "../app/controllers/RaffleController.js"

class MakeRaffle {
  static getInstace() {
    const repository = new RaffleRepository(Raffle)
    const service = new RaffleService(repository)
    const controller = new RaffleController(service)

    return controller
  }
}

export { MakeRaffle }
