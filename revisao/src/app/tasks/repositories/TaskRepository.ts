import { CreateTaskDTO } from "../dtos/createTaskDto";
import { UpdateStatusTaskDTO } from "../dtos/updateStatusTaskDto";
import { Task } from "../entities/Task";

class TaskRepository {
  constructor(private model: typeof Task) {}

  async create(task: CreateTaskDTO) {
    return this.model.create(task);
  }

  async updateStatus(params: UpdateStatusTaskDTO) {
    return this.model.findByIdAndUpdate(params.id, {
      $set: { status: params.status }
    }, { new: true })
  }

  async delete(id: string) {
    return this.model.findByIdAndDelete(id);
  }

  async pushUser(taskId: string, userId: string) {
    return this.model.findByIdAndUpdate(taskId, {
          $push: { users: [userId] }
        }, { new: true }).populate('users')
  }
}

export { TaskRepository }