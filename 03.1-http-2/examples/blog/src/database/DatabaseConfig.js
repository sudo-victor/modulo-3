import mongoose from "mongoose";

class DatabaseConfig {
  static async initialize() {
    mongoose.connection.once("open", () => {
      console.log("Database is connected")
    })

    await mongoose.connect(process.env.DATABASE_URL)
  }
}

export { DatabaseConfig }
