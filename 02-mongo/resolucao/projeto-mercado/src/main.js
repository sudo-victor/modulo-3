const { MongoClient } = require('mongodb');
const { ProductRepository } = require('./repositories/productRepository')

const client = new MongoClient('mongo url');
const databaseName = "mercado"
const collectionName = "produtos"

const collection = client.db(databaseName).collection(collectionName);

const productRepository = new ProductRepository(collection)

;(async () => {
  console.log(await productRepository.getByName('asdaasd'))
})()
