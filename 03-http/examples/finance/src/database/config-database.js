import { MongoClient } from "mongodb"
import dotenv from "dotenv"
dotenv.config()

export function initializeDatabase() {
  const client = new MongoClient(process.env.DATABASE_URL)
  const collection = client.db("finance").collection("transactions")
  return { client, collection }
}

// // exportar objeto
// export const nome = "asd"
// export const sobrenome = "asd"
// export { sobrenome }
// // importando
// import { sobrenome, nome } from "./asd"
// import * as qualquernome from "./asd"
// qualquernome.nome
// import qualquernome, {asdasdas} from "./asd"


// // exportar por padrao
// const name = "Halluz"
// export default name

// import qualquernome from "./asd"