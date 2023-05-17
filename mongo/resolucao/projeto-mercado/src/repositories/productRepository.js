// ## Requisitos
// - [x] Deve ser possível cadastrar um produto, passando as informacoes: nome,
// preco, estoque e categoria
// - [x] Deve ser possível buscar um produto pelo nome
// - [x]Deve ser possível buscar todos os produtos de uma determinada categoria
// - [x] Deve ser possível atualizar as informacoes de um produto passando o seu id
// - [x] Deve ser possível deletar cada produto pelo id

const { ObjectId } = require("mongodb")

class ProductRepository {
  constructor(database) {
    this.database = database;
  }

  async create(data) {
    const product = await this.database.insertOne(data);
    return product;
  }

  async getByName(name) {
    const product = await this.database.findOne({
      name
    })

    return product;
  }

  async getAllByCategory(category) {
    const products = await this.database.find({
      category
    }).toArray()

    return products
  }

  async update(id, data) {
    await this.database.updateOne({
      _id: new ObjectId(id)
    }, {
      $set: {
        ...data
      }
    })
  }

  async destroy(id) {
    await this.database.deleteOne({ _id: new ObjectId(id) })
  }
}

module.exports = { ProductRepository };