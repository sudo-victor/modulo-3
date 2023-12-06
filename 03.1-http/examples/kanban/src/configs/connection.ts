import { connect, connection } from "mongoose"
import { env } from "./env"

// connect -> Ele conecta com banco
// connection -> disponibilizar eventos do banco de dados

// Cluster -> Armario
// Bancos de dados -> Gavetas
// Collection -> As pastas dentro das gavetas
// Document/Schema/Model -> O arquivo dentro da pasta

async function connectionDatabase() {
  connection.on("open", () => {
    console.log("🌚 Database is connected")
  })
  await connect(env.DATABASE_URL)
}

export { connectionDatabase }

