export class UserRepository {
  constructor(model) {
    this.model = model;
  }

  async findAll() {
    return this.model.find().populate("posts")
  }

  async findByEmail(email) {
    return this.model.findOne({ email });
  }

  async create(user) {
    return this.model.create(user);
  }

  async associatePost(userId, postId) {
    return this.model.findByIdAndUpdate(
      userId,
      {
        $push: { posts: postId }
      },
      {
        new: true
      }
    )
  }
}