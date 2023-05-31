const express = require('express');

const servidor = express()

servidor.use(express.json())

servidor.post('/produtos', async (requisicao, resposta) => {
  const body = requisicao.body
  
  resposta.json({ product })
})

// servidor.post('/produtos', (req, res) => {

// });

servidor.listen(4000, () => {
  console.log('listening on port 4000')
})