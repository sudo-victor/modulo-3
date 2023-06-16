const express = require('express')

const app = express()

app.get('/cars', (req, res) => {
  res.send('OOOOOOOOO')
})

app.listen(3333, () => {
  console.log('o servidor já ta rodando')
})
