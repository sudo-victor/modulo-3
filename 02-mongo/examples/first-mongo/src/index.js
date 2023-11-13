const { MongoClient, ObjectId } = require('mongodb')

const urlMongo = "mongodb+srv://joaozin_minecraft:KoR657RFuhBCZBdZ@arniaturma5.hlqlsqm.mongodb.net/"

const client = new MongoClient(urlMongo)

// Cluster > Database > Collections > Schema
// const carros = []
const carros = client.db("katchau").collection("carros")

// IIFE -> Immediately invoked function expression
// ;(async () => {
//   await carros.insertOne({ modelo: 'Fusca', cor: 'Amarelo'  });
//   client.close()
// })()

// ;(async () => {
//   const carrosList = await carros.find().toArray();
//   console.log(carrosList)
//   client.close()
// })()

// ;(async () => {
//   const carrosList = await carros.findOne({ _id: new ObjectId('6552b13ef94d8a37a6ace1ff') })
//   console.log(carrosList)
//   client.close()
// })()

// ;(async () => {
//   await carros.updateOne(
//     {
//       _id: new ObjectId('6552b13ef94d8a37a6ace1ff'),
//     },
//     {
//       $set: {
//         cor: 'Verde',
//         placa: '123123'
//       }
//     }
//   )

//   client.close()
// })()

// ;(async () => {
//   await carros.deleteOne(
//     {
//       _id: new ObjectId('6552b13ef94d8a37a6ace1ff')
//     }
//   )
//   client.close()
// })()


// database.find();
// database.findOne();
// database.updateOne();
// database.deleteOne();