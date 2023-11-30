import { Task, TaskProps } from "../domain/Task";
import { MongooseTaskRepository } from "../repositories/MongooseTaskRepository";
import { TaskRepository } from "../repositories/TaskRepository";

interface CreateProps {
  title: string;
  content: string;
  status: string;
}

export class TaskService {
  constructor(private repository: MongooseTaskRepository) {}

  async create(data: CreateProps) {
    const validStatus = ["pending", "doing", "done"]
    if (!validStatus.includes(data.status)) {
      return {
        error: true,
        message: "Status must be 'pending', 'doing' or 'done'"
      }
    }

    const task = new Task(data as TaskProps)
    await this.repository.create(task)
    return { error: false }
  }

  async list() {
    return await this.repository.findAll()
  }
}
