class UserRepository {
  constructor(database, entity, postEntity) {
    this.database = database
    this.entity = entity
    this.postEntity = postEntity
  }

  findAll() {
    return this.database
  }

  findByEmail(email) {
    return this.database.find((item) => item.email === email)
  }

  create(data) {
    const user = new this.entity(data)
    this.database.push(user)
    return user
  }

  addPost(id, data) {
    const post = new this.postEntity(data)
    const currentUser = this.database.find((item) => item.id === id)

    currentUser.posts.push(post)

    return currentUser
  }
}

export { UserRepository }