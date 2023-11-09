
class Task {
  constructor(title, description, priority) {
    this.id = new Date().getTime()
    this.title = title
    this.description = description
    this.priority = priority
    this.createdAt = new Date()
  }

  setDoneAt() {
    this.doneAt = new Date()
  }
}

module.exports = Task