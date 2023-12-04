import { connect, connection } from "mongoose"
import { env } from "./env"

export class MongooseConfig {
  static async initialize() {
    connection.on("open", () => {
      console.log("☃️  Database is connected")
    })

    await connect(env.DATABASE_URL)
  }
}
