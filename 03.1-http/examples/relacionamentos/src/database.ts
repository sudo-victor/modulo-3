import { connect } from "mongoose"

async function initializeDb() {
  await connect("mongodb+srv://joaozin_minecraft:KoR657RFuhBCZBdZ@arniaturma5.hlqlsqm.mongodb.net/relacionamentos")
}

export { initializeDb }
