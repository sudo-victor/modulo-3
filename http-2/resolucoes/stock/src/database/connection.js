import mongoose from "mongoose";

function initializeConnection() {
  const url = process.env.DATABASE_URL

  mongoose.connection.on("open", () => {
    console.log("Connection established")
  })

  mongoose.connect(url)
}

export { initializeConnection }