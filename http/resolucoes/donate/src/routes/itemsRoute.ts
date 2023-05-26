import { Router } from "express";
import { makeItemApp } from "../factories/itemsFactory";

const itemRouter = Router()
const itemsApp = makeItemApp()

itemRouter.post("/items", itemsApp.create.bind(itemsApp))
itemRouter.patch("/items/:id", itemsApp.updateDonateStatus.bind(itemsApp))
itemRouter.get("/items", itemsApp.getAll.bind(itemsApp))

export { itemRouter }