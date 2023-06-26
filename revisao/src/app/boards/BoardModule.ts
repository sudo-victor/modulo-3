import { Board } from "./entities/Board";
import { BoardRepository } from "./repositories/BoardRepository";
import { BoardService } from "./services/BoardService";
import { BoardController } from "./controllers/BoardController";

class BoardModule {
  static build() {
    const repository = new BoardRepository(Board)
    const service = new BoardService(repository)
    const controller = new BoardController(service)

    return { repository, service, controller }
  }
}

export { BoardModule }
