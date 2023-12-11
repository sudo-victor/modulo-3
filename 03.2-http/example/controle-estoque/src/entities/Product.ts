import { Schema, model } from "mongoose"

export interface IProduct extends Document {
  name: string;
  amount: number;
  code: string;
}

const ProductSchema = new Schema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  code: { type: String, required: true, unique: true },
}, { timestamps: true })

export const Product = model("Product", ProductSchema)
