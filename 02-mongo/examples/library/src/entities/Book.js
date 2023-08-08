class Book {
  constructor(data) {
    this.title = data.title
    this.description = data.description
    this.releasedAt = data.releasedAt
    this.author = data.author
    this.category = data.category
    this.createdAt = new Date()
  }
}

export { Book }