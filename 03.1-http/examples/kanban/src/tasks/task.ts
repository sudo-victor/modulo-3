import { Schema, model } from "mongoose"

// - title -> string[Required]
// - content -> string[Required]
// - status -> string[Required] Pendente, Fazendo, Concluido
// - user -> ObjectId

// Schema -> Definir o formato do objeto que será salvo na collection
// Model -> Representaçao da collection

const TaskSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  status: { type: String, required: true, default: "pendente" },
  user: { type: Schema.Types.ObjectId, ref: "User"  }
}, { timestamps: true })

// Timestamp -> Adiciona toda a lógica do createdAt & updatedAt

const Task = model("Task", TaskSchema)

export { Task }
