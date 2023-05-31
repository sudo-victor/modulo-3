// ### Livro
// - Titulo (string)
// - Descricao (string)
// - Ano de Lancamento (string)
// - Autor (string)
// - Categoria (string)

// ## Funcionalidades
// - Deve ser possível cadastrar um livro, passando as informacoes: titulo, descricao,
// ano de lancamento, autor e categoria;
// - Deve ser possível buscar um livro pelo titulo
// - Deve ser possível buscar todos os livros de um determinado autor
// - Deve ser possível atualizar as informacoes de um livro passando o seu id
// - Deve ser possível deletar cada livro pelo id

// CommonJS
const { MongoClient, ObjectId } = require('mongodb');

const client = new MongoClient('mongo url');

const databaseName = "bookstore";
const collectionName = "books";

const bookCollection = client.db(databaseName).collection(collectionName);

async function createBook(data, database) {
  // return await database.insertOne({ ...data })
  return await database.insertOne(data)
}

async function getBookByTitle(title, database) {
  const book = await database.findOne({ title })
  return book
}

async function getBookByAuthor(author, database) {
  const books = await database.find({ author }).toArray()
  return books
}

async function updateBook(id, data, database) {
  await database.updateOne({ _id: new ObjectId(id) }, {
    $set: {
      ...data
    }
  })
}

async function deleteBook(id, database) {
  await database.deleteOne({ _id: new ObjectId(id) })
}

// Create
// IIFE -> Immediately invoked function expression
// ;(async () => {
//   const harryPotter = {
//     title: 'Harry Potter Pedra Filosofal',
//     description: 'Após as sofríveis férias na casa dos tios',
//     category: 'Aventura',
//     author: 'J. K. Rowling',
//     releasedAt: '2002',
//   }
  
//   const livro = await createBook(harryPotter, bookCollection)
//   console.log("🚀 ~ file: index.js:41 ~ livro:", livro)

//   await client.close()
// })()

// Find By Title
// ;(async () => {
//   const livro = await getBookByTitle('Harry Potter Camara Secreta', bookCollection)
//   console.log("🚀 ~ file: index.js:41 ~ livro:", livro)

//   await client.close()
// })()

// Update
// ;(async () => {
//   await updateBook('6463f7b34a3c10345572e9d1', { releasedAt: '2003' }, bookCollection)
// })()

// Delete
// ;(async () => {
//   await deleteBook('6463f7b34a3c10345572e9d1', bookCollection)
// })()

// Find By Author
// ;(async () => {
//   const livros = await getBookByAuthor('J. K. Rowling', bookCollection)
//   console.log("🚀 ~ file: index.js:41 ~ livros:", livros)

//   await client.close()
// })()
