import mongoose from "mongoose";

const BoardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  tasks: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Task' }]
}, { timestamps: true })

const Board = mongoose.model('Board', BoardSchema)

export { Board }
