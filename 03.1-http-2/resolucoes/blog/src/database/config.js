import mongoose from "mongoose"

function connectionDatabase() {
  mongoose.connection.on("open", () => {
    console.log("Connection database")
  })

  mongoose.connect(process.env.DATABASE_URL)
}

export { connectionDatabase }
