import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  status: { type: String, required: true },
}, { timestamps: true })

const Task = mongoose.model('Task', TaskSchema)

export { Task }
