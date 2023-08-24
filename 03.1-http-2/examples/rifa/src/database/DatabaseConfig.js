import mongoose, { connect } from "mongoose"

class DatabaseConfig {
  static async initialize() {
    mongoose.connection
      .once("open", () => {
        console.log("Database was initialize")
      })

    await connect(process.env.DATABASE_URL)
  }
}

export { DatabaseConfig }