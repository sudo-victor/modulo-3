import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  roomsAvailables: { type: Number, required: true, min: 0 },
  photo: { type: mongoose.Schema.Types.ObjectId, ref: "Photo" }
}, { timestamps: true })

type IHotel = mongoose.InferSchemaType<typeof HotelSchema>
const Hotel = mongoose.model("Hotel", HotelSchema)

export { Hotel, IHotel }
