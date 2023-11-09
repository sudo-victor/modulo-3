const Task = require('../data/task')
const TaskRepository = require("../data/taskRepository")

const taskRepository = new TaskRepository()

class TaskService {
  create(title, description, priority) {
    const task = new Task(title, description, priority)
    taskRepository.create(task)
  }

  findAll() {
    return taskRepository.findAll()
  }
}

module.exports = TaskService