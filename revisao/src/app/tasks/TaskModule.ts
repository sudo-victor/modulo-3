import { BoardModule } from "../boards/BoardModule";
import { TaskController } from "./controllers/TaskController";
import { Task } from "./entities/Task";
import { TaskRepository } from "./repositories/TaskRepository";
import { TaskService } from "./services/TaskService";

class TaskModule {
  static build() {
    const repository = new TaskRepository(Task)
    const service = new TaskService(repository, BoardModule.build().repository)
    const controller = new TaskController(service)
    return { repository, service, controller }
  }
}

export { TaskModule }