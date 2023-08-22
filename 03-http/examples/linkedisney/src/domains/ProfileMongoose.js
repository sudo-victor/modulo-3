import { Schema, model } from "mongoose"

const ProfileSchema = new Schema({
  fullname: String,
  title: String,
  bio: String,
  currentOccupation: String,
  education: String,
  certifications: String,
  status: String,
  createdAt: Date,
  deletedAt: Date
})

const Profile = model("Profile", ProfileSchema)
export { Profile }