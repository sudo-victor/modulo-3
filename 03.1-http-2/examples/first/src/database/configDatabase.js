import mongoose, { connect } from "mongoose"

class Database {
  static async initialize() {
    mongoose.connection.once("open", () => {
      console.log("Initialize database")
    })

    await connect(process.env.DATABASE_URL)
  }
}

export { Database }