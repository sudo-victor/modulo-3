import { UserModule } from "../users/user.module";
import { Task } from "./task";
import { TaskController } from "./task.controller";
import { TaskRepository } from "./task.repository";
import { TaskService } from "./task.service";

export class TaskModule {
  static getInstance() {
    const userModule = UserModule.getInstance()
    const repository = new TaskRepository(Task)
    const service = new TaskService(repository, userModule.repository)
    const controller = new TaskController(service)

    return { repository, service, controller }
  }
}