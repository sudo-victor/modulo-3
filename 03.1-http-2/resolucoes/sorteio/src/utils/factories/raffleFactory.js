import { Raffle } from "../../app/models/Raffle.js"
import { RaffleController } from "../../app/controllers/RaffleController.js"
import { RaffleRepository } from "../../app/repositories/RaffleRepository.js"
import { RaffleService } from "../../app/services/RaffleService.js"

export const makeRaffle = () => {
  const repository = new RaffleRepository(Raffle)
  const service = new RaffleService(repository)
  return new RaffleController(service)
}