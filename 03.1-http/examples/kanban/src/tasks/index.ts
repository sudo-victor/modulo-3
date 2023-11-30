import { TaskController } from "./controllers/TaskController";
import { Task } from "./domain/MongooseTask";
import { MongooseTaskRepository } from "./repositories/MongooseTaskRepository";
import { TaskService } from "./services/TaskService";

const repository = new MongooseTaskRepository(Task)
const service = new TaskService(repository)
const controller = new TaskController(service)

export default controller