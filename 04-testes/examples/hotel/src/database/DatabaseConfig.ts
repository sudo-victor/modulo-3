import mongoose from "mongoose"

class DatabaseConfig {
  static initialize() {
    mongoose.connection.on("open", () => {
      console.log("Database was connect")
    })
    mongoose.connect(process.env.DATABASE_URL as string)
  }
}

export { DatabaseConfig }