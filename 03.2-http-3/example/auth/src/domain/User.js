import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  nickname: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  photo: { type: mongoose.Schema.Types.ObjectId, ref: "Photo" }
}, { timestamps: true })

const User = mongoose.model("User", UserSchema)

export { User }
