import { Team } from "../entities/Team.js"
import { TeamRepository } from "../repositories/TeamRepository.js"
import { TeamService } from "../services/TeamService.js"

class MakeTeam {
  static getInstance(collection) {
    const repository = new TeamRepository(collection, Team)
    const service = new TeamService(repository)

    return { service }
  }
}

export { MakeTeam }

// const [,,,, segundaOpcao,,teste] = MakeTeam.getInstance()
// primeiraPosicao.create()
// const instance = MakeTeam.getInstance()
// instance[0]
// instance[1]


