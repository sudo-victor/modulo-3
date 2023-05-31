const http = require('http');
const url = require('url')

const server = http.createServer((requisicao, resposta) => {
  const parseUrl = url.parse(requisicao.url, true)
  const route = parseUrl.pathname
  const method = requisicao.method
  console.log(method, route)
  if (method === 'GET') {

  }
  resposta.end('Alguem me fez uma requisicao com o Método: ')
})

// Iniciando o servidor na porta 3000
server.listen(5005, () => {
  console.log('Estou ouvindo')
})

// HTTP PORT DEFAULT => 80
// HTTPS PORT DEFAULT => 443
// HOST: www.google.com:440
