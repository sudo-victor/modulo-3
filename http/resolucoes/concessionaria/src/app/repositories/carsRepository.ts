import { database } from "../../database/config";

export async function createCarRepository(car: any) {
  return await database.insertOne(car)
}