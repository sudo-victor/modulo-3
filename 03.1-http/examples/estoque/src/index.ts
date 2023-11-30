import mongoose from "mongoose";

mongoose.connect("mongodb+srv://joaozin_minecraft:KoR657RFuhBCZBdZ@arniaturma5.hlqlsqm.mongodb.net/estoque")
mongoose.connection.on("open", () => {
  console.log("DEU BOM ")
})

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true }
})

const Product = mongoose.model("Product", ProductSchema)
