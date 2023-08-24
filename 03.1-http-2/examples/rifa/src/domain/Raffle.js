import { Schema, model } from "mongoose";

const RaffleSchema = new Schema({
  title: { type: String, required: true },
  min_interval: { type: Number, required: true },
  max_interval: { type: Number, required: true },
  result: { type: Number },
  drawedAt: { type: Date }
}, { timestamps: true })


const Raffle = model("Raffle", RaffleSchema)

export { Raffle }
