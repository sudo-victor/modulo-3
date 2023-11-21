// CommonJS
// const express = require("express")
// Module
import express from "express"

// Instanciar
const app = express()

const database = []

app.use(express.json())

function handleCreateProduct(req, res) {
  // Header, Body, Params, Query
  const product = req.body
  database.push(product)
  console.log(database)

  if(erorr) {
    res.status(400).json()
    return
  }

  res.status(201).json({ message: "created" })
}

app.post("/products", handleCreateProduct)

// Rodar
app.listen(3333, () => console.log("Server is running!"))