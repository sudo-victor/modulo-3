
const database = []

class TaskRepository {
  create(task) {
    database.push(task)
  }

  findAll() {
    return database
  }
}

module.exports = TaskRepository