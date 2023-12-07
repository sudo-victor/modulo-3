import { Task } from "./task";
import { CreateTaskDTO } from "./task.dto";

export class TaskRepository {
  constructor(private model: typeof Task) {}

  async create(task: CreateTaskDTO) {
    return await this.model.create({
      ...task,
      user: task.userId
    })
  }

  async findById(id: string) {
    return await this.model.findById(id)
  }

  async updateStatus(taskId: string, status: string) {
    return await this.model.findByIdAndUpdate(taskId, { status }, { new: true }).populate("user")
  }
}