import { MongoClient } from "mongodb"
import dotenv from "dotenv"
dotenv.config()

export function initializeDatabase() {
  const client = new MongoClient(process.env.DATABASE_URL)
  const collection = client.db("finance").collection("transactions")
  return { client, collection }
}

// // exportar objeto
// export const sobrenome = "asd"
// export { sobrenome }
// // importando
// import { sobrenome } from "./asd"
// import qualquernome from "./asd"
// qualquernome.sobrenome

// // exportar por padrao
// const name = "Halluz"
// export default name

// import qualquernome from "./asd"