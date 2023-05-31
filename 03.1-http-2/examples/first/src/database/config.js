import mongoose from "mongoose"
import { config } from "dotenv";
config();

const url = process.env.DATABASE_URL

function initializeDatabase() {
  mongoose.connection
    .on("error", (error) => {
      console.log("ERROR: connection to mongo failed: ", error)
    })
    .on("close", () => {
      console.log("Connection to mongo ended")
    })
    .once("open", () => {
      console.log("Connection to mongo")
    })

    mongoose.connect(url)
}

function disconnectDatabase() {
  mongoose.disconnect()
}

export { initializeDatabase, disconnectDatabase }
