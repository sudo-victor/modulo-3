import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  nickname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  photo: { type: mongoose.SchemaTypes.ObjectId, ref: 'Photo', required: true },
}, { timestamps: true })

const User = mongoose.model('User', UserSchema);

export { User }