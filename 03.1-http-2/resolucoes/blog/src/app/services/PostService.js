export class PostService {
  constructor(repository, userRepository) {
    this.repository = repository;
    this.userRepository = userRepository;
  }

  async create(userId, body) {
    // Criar o post
    const post = await this.repository.create(body);

    // Associar a um usuario
    return this.userRepository.associatePost(userId, post._id)
  }
}