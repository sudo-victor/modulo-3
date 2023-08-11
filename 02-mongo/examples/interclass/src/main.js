import { initializeDatabase } from "./database/databaseConfig.js"
import { MakeTeam } from "./factories/MakeTeam.js"

const { collection, client } = initializeDatabase()
const instance = MakeTeam.getInstance(collection)

;(async () => {
  const result = await instance.service.findByCategory('mascul')
  console.log(result)
  client.close()
})()
