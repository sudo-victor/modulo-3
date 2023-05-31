import mongoose from "mongoose"

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  amount: Number
})

const Product = mongoose.model('Product', ProductSchema)

export { Product }