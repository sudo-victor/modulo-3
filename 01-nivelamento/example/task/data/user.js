
class User {
  constructor(name, email) {
    this.id = new Date().getTime()
    this.name = name
    this.email = email
  }
}

module.exports = User
