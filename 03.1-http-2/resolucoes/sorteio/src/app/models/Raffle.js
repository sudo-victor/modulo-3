import mongoose from "mongoose"

const RaffleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  valueMin: {
    type: Number,
    required: true,
  },
  valueMax: {
    type: Number,
    required: true,
  },
  finalValue: {
    type: Number,
    default: null
  },
  doneAt: {
    type: Date,
    default: null
  }
}, {
  timestamps: true
})

createdAt
updatedAt

const Raffle = mongoose.model('Raffle', RaffleSchema)

export { Raffle }