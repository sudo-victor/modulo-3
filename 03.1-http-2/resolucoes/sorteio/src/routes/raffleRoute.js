import { Router } from "express"
import { makeRaffle } from "../utils/factories/raffleFactory.js"

const route = Router()
const raffle = makeRaffle()

route.post('/raffles', raffle.create.bind(raffle))
route.patch('/raffles/generate/:id', raffle.generateRandomValue.bind(raffle)) 

export { route }
