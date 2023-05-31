import mongoose from "mongoose"

function initializeDatabase() {
  mongoose.connection
    .on("error", (error) => {
      console.log("Deu ruim, error: " + error)
    })
    .on("close", () => {
      console.log("Database disconnected")
    })
    .once("open", () => {
      console.log("Database initialized")
    })

  const url = process.env.DATABASE_URL
  mongoose.connect(url)
}

export { initializeDatabase }
