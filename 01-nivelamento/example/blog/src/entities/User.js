let idCount = 0

class User {
  constructor(data) {
    this.id = ++idCount
    this.nickname = data.nickname
    this.email = data.email
    this.password = data.password
    this.posts = []
    this.createdAt = new Date()
  }
}

export { User }