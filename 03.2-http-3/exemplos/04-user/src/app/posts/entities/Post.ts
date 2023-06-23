import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  content: { type: String, required: true },
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true
  }
}, { timestamps: true })

const Post = mongoose.model("Post", PostSchema)

export { Post }
