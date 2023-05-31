import express from 'express';
import orderCollection from './database/index.mjs';
import { ObjectId } from 'mongodb';

const app = express();
const port = 3333;

app.use(express.json());

app.post('/orders', async (req, res) => {
  const payload = req.body

  const orderToPersist = {
    ...payload,
    isDelivered: false,
    createdAt: new Date()
  }

  await orderCollection.insertOne(orderToPersist)

  res.status(201).json({
    data: orderToPersist
  })
})

app.get('/orders', async (req, res) => {
  const queryparams = req.query

  let queryDatabase = {}
  
  if(queryparams.is_delivered === 'false') {
    queryDatabase = { isDelivered: false }
  } else if(queryparams.is_delivered === 'true') {
    queryDatabase = { isDelivered: true }
  }

  const orders = await orderCollection.find(queryDatabase).toArray()
  res.json({ orders })
})

app.get('/orders/:id', async (req, res) => {
  const { id } = req.params

  const order = await orderCollection.findOne({
    _id: new ObjectId(id)
  })

  res.status(200).json({ order })
})

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
