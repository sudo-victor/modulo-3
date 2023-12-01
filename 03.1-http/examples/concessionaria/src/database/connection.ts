import { connect, connection } from "mongoose"
import { env } from "../env"

export class DBConnection {
  static async connect() {
    connection.on("open", () => {
      console.log("🐸 Database is connect")
    })

    await connect(env.DATABASE_URL)
  }
}