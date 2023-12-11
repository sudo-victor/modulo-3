import { connect, connection } from "mongoose"

async function connectionDatabase() {
  connection.on("open", () => {
    console.log("Database is connected")
  })

  await connect(process.env.DATABASE_URL as string)
}

export { connectionDatabase }