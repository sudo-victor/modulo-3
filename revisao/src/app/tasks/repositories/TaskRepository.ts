import { CreateTaskDTO } from "../dtos/createTaskDto";
import { Task } from "../entities/Task";

class TaskRepository {
  constructor(private model: typeof Task) {}

  async create(task: CreateTaskDTO) {
    return this.model.create(task);
  }
}

export { TaskRepository }