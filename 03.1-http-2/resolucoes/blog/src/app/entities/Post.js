import mongoose from  "mongoose"

const PostSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    minLength: 3
  },
  like: {
    type: Number,
    default: 0,
    min: 0
  }
}, {
  timestamps: true
})

const Post = mongoose.model('Post', PostSchema)

export { Post }