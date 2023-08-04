let idCount = 0
class User {
  constructor(data) {
    this.id = ++idCount
    this.name = data.name
    this.email = data.email
    this.password = data.password
  }
}

export { User }
