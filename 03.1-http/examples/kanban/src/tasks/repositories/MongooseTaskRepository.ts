import { Task } from "../domain/MongooseTask"

interface CreateProps {
  title: string;
  content: string;
  status: string;
}

export class MongooseTaskRepository {
  constructor(private collection: typeof Task) {}

  async create(task: CreateProps) {
    await this.collection.create(task)
  }

  async findAll() {
    return await this.collection.find()
  }
}