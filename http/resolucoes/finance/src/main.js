import express from 'express';
import { ObjectId } from 'mongodb'
import { database } from './database/config.js';
import { makeTransaction } from './factories/transactionFactory.js'
import { createTransactionBodyIsValid } from './utils/validBody.js';

const app = express();

app.use(express.json())

app.post('/transactions', async (req, res) => {
  // const data = req.body
  const { body } = req;

  const bodyIsValid = createTransactionBodyIsValid(body)
  if (!bodyIsValid) {
    res.status(400).json({
      error: true,
      message: 'Invalid body'
    })
  }

  const transaction = makeTransaction(body);
  await database.insertOne(transaction);

  res.status(201).json({
    error: false,
    data: transaction
  });
})

app.get('/transactions', async (req, res) => {
  const { query } = req;

  let queryTransaction = { canceledAt: null }

  if (query.kind === 'withdraw' || query.kind === 'deposit') {
    queryTransaction = { ...queryTransaction, kind: query.kind }
  }

  const transactions = await database.find(queryTransaction).toArray()

  res.status(200).json({
    error: false,
    data: transactions
  })
})

app.get('/transactions/:id', async (req, res) => {
  const { params } = req;

  if (!ObjectId.isValid(params.id)) {
    res.status(400).json({
      error: true,
      message: 'Invalid id'
    })
  }

  const transaction = await database.findOne({
    _id: new ObjectId(params.id)
  })

  res.status(200).json({
    error: false,
    data: transaction
  })
})

app.delete('/transactions/:id', async (req, res) => {
  const { params } = req;

  if (!ObjectId.isValid(params.id)) {
    res.status(400).json({
      error: true,
      message: 'Invalid id'
    })
  }

  const transactionAlreadyExists = await database.findOne({
    _id: new ObjectId(params.id),
    canceledAt: null
  })

  if(!transactionAlreadyExists) {
    res.status(404).json({
      error: true,
      message: 'Transaction not found'
    })
  }

  await database.updateOne({
    _id: new ObjectId(params.id)
  }, {
    $set: {
      canceledAt: new Date()
    }
  });

  return res.status(204).json()
})

app.listen(3333, () => {
  console.log('listening on 3333')
})