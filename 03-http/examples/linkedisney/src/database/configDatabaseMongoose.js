import mongoose from "mongoose"
import { config } from "dotenv"
config()

function initializeDatabase() {
  mongoose.connect(process.env.DATABASE_URL)
}

export { initializeDatabase }