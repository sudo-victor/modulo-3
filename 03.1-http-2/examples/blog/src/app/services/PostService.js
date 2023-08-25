class PostService {
  constructor(postRepository, userRepository) {
    this.postRepository = postRepository
    this.userRepository = userRepository
  }

  async create(userId, data) {
    // verificar se o usuário existe
    const userExists = await this.userRepository.findById(userId)
    if (!userExists) {
      return {
        error: true,
        status: 404,
        message: "User not found"
      }
    }

    // criar o post
    const post = await this.postRepository.create(data)

    // atualizar a listagem de post do usuário
    await this.userRepository.pushPost(userId, post.id)

    return post
  }
}

export { PostService }
