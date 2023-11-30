import { Schema, model } from "mongoose"

// Definir o modelo
const TaskSchema = new Schema({
  title: { type: String, required: true, minLength: 2  },
  content: { type: String, required: true, minLength: 1 },
  status: { type: String, default: "pending", required: true }
})

// Criar a collection do modelo
export const Task = model("Task", TaskSchema)
