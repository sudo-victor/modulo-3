class User {
  constructor(username) {
    this.id = new Date().getTime()
    this.username = username
    this.songs = []
    this.createdAt = new Date()
  }
}

module.exports = User
