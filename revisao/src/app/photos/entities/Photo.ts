import mongoose from "mongoose";

const PhotoSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  mimetype: { type: String, required: true },
}, { timestamps: true })

const Photo = mongoose.model('Photo', PhotoSchema);

export { Photo }