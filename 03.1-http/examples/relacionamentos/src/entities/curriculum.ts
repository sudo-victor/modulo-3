import { Schema, model } from "mongoose"

const CurriculumSchema = new Schema({
  educations: String,
  certifications: String,
  description: String,
  skills: String,
})

export const Curriculum = model("Curriculum", CurriculumSchema)