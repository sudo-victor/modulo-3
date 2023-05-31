import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
import { initializeDatabase } from "./database/config.js"

const AuthorSchema = new mongoose.Schema({
  name: String,
  books: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book'
  }]
})
const Author = mongoose.model('Author', AuthorSchema)

const BookSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number
})
const Book = mongoose.model('Book', BookSchema)

;(async () => {
  initializeDatabase()
  const bookCreated = await Book.create({ title: 'Title Test 3', description: 'lorem ipsum', price: 100})
  const result = await Author.findByIdAndUpdate("6477c87a5331d6a30ec15bb5", {
    $push: {
      books: [bookCreated._id]
    }
  }, { new: true })
  console.log(JSON.stringify(result))
  mongoose.disconnect()
})()
