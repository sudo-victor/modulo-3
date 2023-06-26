import { CreateBoardDTO } from "../dtos/createBoardDto";
import { BoardRepository } from "../repositories/BoardRepository";

class BoardService {
  constructor(private repository: BoardRepository) {}

  async create(board: CreateBoardDTO) {
    try {
      return this.repository.create(board);
    } catch(error) {
      console.log('error creating board', error)
      return { error: true, message: "Internal server error", status: 500 }
    }
  }
}

export { BoardService }
