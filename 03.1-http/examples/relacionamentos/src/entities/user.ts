import { Schema, model } from "mongoose"

const UserSchema = new Schema({
  name: String,
  phone: String,
  address: String,
  curriculum: { type: Schema.Types.ObjectId, ref: "Curriculum" },
})

export const User = model("User", UserSchema)