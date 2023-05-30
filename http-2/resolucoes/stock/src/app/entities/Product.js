import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    default: 0,
    min: 0
  },
}, {
  timestamps: true
})

const Product = mongoose.model('Product', ProductSchema)

export { Product }
