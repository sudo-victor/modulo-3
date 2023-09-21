import mongoose, { InferSchemaType } from "mongoose";

const BookingSchema = new mongoose.Schema({
  checkinAt: { type: Date, required: true, min: new Date() },
  checkoutAt: { type: Date, required: true, min: new Date() },
  status: { type: String, required: true, default: "pending" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  hotel: { type: mongoose.Schema.Types.ObjectId, ref: "Hotel" },
  canceledAt: { type: Date }
}, { timestamps: true });

type IBooking = InferSchemaType<typeof BookingSchema>

const Booking = mongoose.model("Booking", BookingSchema)

export { IBooking, Booking }
