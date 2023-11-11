class Song {
  constructor(title, author, releasedAt, category) {
    this.id = new Date().getTime()
    this.title = title
    this.author = author
    this.releasedAt = releasedAt
    this.category = category
    this.createdAt = new Date()
  }
}
