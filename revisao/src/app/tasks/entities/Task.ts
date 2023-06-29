import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  status: { type: String, required: true },
  users: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'User' }],
}, { timestamps: true })

const Task = mongoose.model('Task', TaskSchema)

export { Task }
