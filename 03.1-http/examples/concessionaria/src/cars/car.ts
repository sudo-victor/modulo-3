import { Schema, model } from "mongoose"

// Schema -> Modelo pra validaçao
const CarSchema = new Schema({
  color: { type: String, required: true },
  releasedAt: { type: Number, required: true },
  plate: { type: String, required: true, minLength:7, maxLength: 7 },
  carModel: { type: String, required: true }
}, { timestamps: true })

// Model -> Collection
export const Car = model("Car", CarSchema)
