import { connect, connection, disconnect } from "mongoose"

export class MongooseConfigDatabase {
  static async initialize() {
    connection
      .on("open", () => {
        console.log("Database was connected")
      })
      .on("close", () => {
        console.log("Database was disconnected")
      })

    await connect(process.env.DATABASE_URL as string)
  }

  static close() {
    disconnect()
  }
}