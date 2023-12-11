import { UserRepository } from "../users/user.repository";
import { CreateTaskDTO, UpdateTaskStatusDTO } from "./task.dto";
import { TaskRepository } from "./task.repository";

export class TaskService {
  constructor(
    private taskRepository: TaskRepository,
    private userRepository: UserRepository
  ) {}

  async create(data: CreateTaskDTO) {
    const user = await this.userRepository.findById(data.userId)
    if (!user) {
      return {
        error: true,
        message: "User not found",
        status: 404
      }
    }

    const result = await this.taskRepository.create(data)

    return result
  }

  async updateStatus(data: UpdateTaskStatusDTO) {
    const task = await this.taskRepository.findById(data.taskId)
    if (!task) {
      return {
        error: true,
        message: "Task not found",
        status: 404
      }
    }

    const result = await this.taskRepository.updateStatus(data.taskId, data.status)

    return result
  }

  async list() {
    return this.taskRepository.findAll()
  }
}

// CONTROLLER -> SERVICE -> REPOSITORY