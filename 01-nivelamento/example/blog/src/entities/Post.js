let idCount = 0

class Post {
  constructor(data) {
    this.id = ++idCount
    this.createdAt = new Date()
    this.content = data.content
  }
}

export { Post }