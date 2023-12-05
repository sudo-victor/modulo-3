import { Schema, model } from "mongoose"

const JobSchema = new Schema({
  company: String,
  startedAt: Date,
  endedAt: Date,
  occupation: String
})

export const Job = model("Job", JobSchema)
