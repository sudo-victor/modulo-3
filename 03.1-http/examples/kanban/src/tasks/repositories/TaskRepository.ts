import { Task } from "../domain/Task";

export class TaskRepository {
  constructor(private collection: any) {}

  async create(task: Task) {
    await this.collection.insertOne(task)
  }

  async findAll() {
    return await this.collection.find().toArray()
  }
}