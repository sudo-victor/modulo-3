class User {

  constructor(nickname, email, password) {
    this.nickname = nickname
    this.email = email
    this.password = password

    this.initialize()
  }

  initialize() {
    this.id = `${new Date().getTime()}_user`
    this.posts = []
    this.createdAt = new Date()
  }

  addPost(post) {
    this.posts.push(post)
  }

}

class Post {

  constructor(content) {
    this.content = content

    this.initialize()
  }

  initialize() {
    this.id = `${new Date().getTime()}_post`
    this.createdAt = new Date()
  }
}

const userDatabase = []

class UserRepository {
  create(nickname, email, password) {
    const user = new User(nickname, email, password)
    userDatabase.push(user)
    return user
  }

  findAll() {
    return userDatabase
  }

  insertPost(userId, content) {
    // usuario pelo id
    const user = userDatabase.find((item) => item.id === userId)

    if (!user) {
      return "User not found"
    }

    // criar um post
    const post = new Post(content)

    // relacionar com o usuario
    user.addPost(post)
  }
}

const repository = new UserRepository()
const userCreated = repository.create("joaozin_minecraft", "a@b.com", "123123")
repository.insertPost(userCreated.id, "asdasdasdasdasd")
