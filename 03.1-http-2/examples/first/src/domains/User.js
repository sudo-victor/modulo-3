import { Schema, model } from "mongoose"

// Definir Schema
const UserSchema = new Schema({
  name: { 
    type: String,
    required: true,
    minLength: 2
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: { 
    type: String,
    required: true
  }
}, { timestamps: true })

// Definir Model
const User = model("User", UserSchema)

export { User }
