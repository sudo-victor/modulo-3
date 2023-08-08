
class User {
  constructor(data) {
    this.nickname = data.nickname
    this.email = data.email
    this.password = data.password
    this.posts = []
    this.createdAt = new Date()
  }
}

export { User }