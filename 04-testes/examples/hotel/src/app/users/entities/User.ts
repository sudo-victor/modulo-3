import mongoose, { Schema, model, InferSchemaType } from "mongoose";

const UserSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true, select: false },
  email: { type: String, required: true, unique: true },
  bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Booking" }]
}, { timestamps: true })

type IUser = InferSchemaType<typeof UserSchema>

const User = model("User", UserSchema)

export { User, IUser }