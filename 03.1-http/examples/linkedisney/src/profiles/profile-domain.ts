import { Schema, model } from "mongoose"
// 1:n
const ProfileSchema = new Schema({
  fullname: { type: String, required: true },
  bio: { type: String, required: true, maxLength: 500 },
  currentOccupation: { type: String },
  education: { type: String },
  status: { type: String, required: true, default: "closed" },
  job: [{ type: Schema.Types.ObjectId, ref: "Job" }],
  deletedAt: { type: Date, default: null }
}, { timestamps: true })

const Profile = model("Profile", ProfileSchema)

export { Profile }
