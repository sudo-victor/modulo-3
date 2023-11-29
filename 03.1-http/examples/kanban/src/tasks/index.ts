import { ConfigDatabase } from "../database/ConfigDatabase";
import { TaskController } from "./controllers/TaskController";
import { TaskRepository } from "./repositories/TaskRepository";
import { TaskService } from "./services/TaskService";

const { collection } = ConfigDatabase.initialize()
const repository = new TaskRepository(collection)
const service = new TaskService(repository)
const controller = new TaskController(service)

export default controller