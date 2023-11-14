const BookRepository = require("./repositories/BookRepository");
const MongoBookRepository = require("./repositories/MongoBookRepository");
const BookService = require("./services/BookService");
const { books, client } = require("./database/configDatabase");

const mongoRepository = new MongoBookRepository(books)
const repository = new BookRepository()
const service = new BookService(mongoRepository)

// IIFE
;(async () => {
  await service.create("Clean Code", "blablabla", 2000, "Wafiter", "tech")
  // console.log(await service.findAll())
  // const allUncleBobBooks = await service.findAllByAuthor("Wafiter")
  await service.update("6553ff2cbd5ce4b9e96c1396", {
    title: "Clean Code",
    description: "mudou!!!",
    releasedAt: 2000,
    author: "Paola",
    category: "tech"
  })

  const paolaBooks = await service.findAllByAuthor("Paola")
  console.log(paolaBooks)
  client.close()
})()