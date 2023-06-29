import { BoardRepository } from "../../boards/repositories/BoardRepository";
import { AssociateAUserDTO } from "../dtos/associateAUserDto";
import { CreateTaskDTO } from "../dtos/createTaskDto";
import { UpdateStatusTaskDTO } from "../dtos/updateStatusTaskDto";
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

  async updateStatus(task: UpdateStatusTaskDTO) {
    try {
      return this.repository.updateStatus(task)
    } catch(error) {
      return { error: true, message: "Internal server error", status: 500 }
    }
  }

  async delete(id: string) {
    try {
      return this.repository.delete(id)
    } catch(error) {
      return { error: true, message: "Internal server error", status: 500 }
    }
  }

  async associateAUser(params: AssociateAUserDTO) {
    try {
      const result =  await this.repository.pushUser(params.task_id, params.user_id)
      return result ?? { error: true, message: "Task not found", status: 404 }
    } catch(error) {
      return { error: true, message: "Internal server error", status: 500 }
    }
  }
}

export { TaskService }