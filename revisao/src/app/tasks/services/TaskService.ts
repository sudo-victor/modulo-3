import { BoardRepository } from "../../boards/repositories/BoardRepository";
import { CreateTaskDTO } from "../dtos/createTaskDto";
import { TaskRepository } from "../repositories/TaskRepository";

class TaskService {
  constructor(
    private repository: TaskRepository,
    private boardRepository: BoardRepository  
  ) {}

  async create(task: CreateTaskDTO) {
    try {
     const taskCreated = await this.repository.create(task);

      return this.boardRepository.pushTask(task.boardId as string, taskCreated.id)
    } catch(error) {
      console.log('error creating board', error)
      return { error: true, message: "Internal server error", status: 500 }
    }
  }
}

export { TaskService }