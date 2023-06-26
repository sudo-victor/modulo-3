import { CreateBoardDTO } from "../dtos/createBoardDto";
import { Board } from "../entities/Board";

class BoardRepository {
  constructor(private model: typeof Board) {}

  create(board: CreateBoardDTO) {
    return this.model.create(board)
  }

  pushTask(boardId: string, taskId: string) {
    return this.model.findByIdAndUpdate(boardId, {
      $push: {
        tasks: [taskId]
      }
    }, { new: true })
  }

}

export { BoardRepository }