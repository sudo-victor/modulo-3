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
    // InsertOne -> Cria um objeto no banco de dados
    const product = await this.database.insertOne(data);
    return product;
  }

  async getByName(name) {
    // FindOne -> Busca um objeto no banco de dados
    const product = await this.database.findOne({
      name
    })

    return product;
  }

  async getAllByCategory(category) {
    // Find -> Busca uma lista de objeto no banco de dados
    const products = await this.database.find({
      category
    }).toArray()

    return products
  }

  async update(id, data) {
    // UpdateOne -> Atualiza um único objeto no banco de dados
    await this.database.updateOne({
      _id: new ObjectId(id)
    }, {
      $set: data
    })
  }

  async destroy(id) {
    // deleteOne -> Deleta um único objeto no banco de dados
    await this.database.deleteOne({ _id: new ObjectId(id) })
  }
}

module.exports = { ProductRepository };