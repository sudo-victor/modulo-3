import mongoose from "mongoose";

function initializeConnection() {
  mongoose.connection.once("open", () => {
    console.log("open connection")
  })

  mongoose.connect(process.env.DATABASE_URL)
}

export { initializeConnection }