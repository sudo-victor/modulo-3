# O que é HTTP

HTTP é a sigla para "Hypertext Transfer Protocol" (Protocolo de Transferência de Hipertexto, em português). É um protocolo de comunicação utilizado para a transferência de dados na World Wide Web (WWW). O HTTP é a base para a comunicação de dados entre um cliente (como um navegador da web) e um servidor web.

Requisicao -> Resposta

## Métodos HTTP

Os métodos HTTP são os verbos usados para indicar a ação a ser realizada em um recurso
específico em uma requisição HTTP. Cada método tem um propósito diferente e define o
tipo de operação que será executada no servidor. Aqui estão alguns dos principais métodos HTTP:

- GET -> Consumir informacoes/dados
- POST -> Cadastrar dados
- PUT -> Atualizacao dos dados
- DELETE -> Deletar né

## Estrutura de uma Requisiao e Resposta

localhost:3000 -> app nestjs
localhost:3333 -> app express
localhost:5000 -> app java
localhost:3306 -> banco de dados mysql

Host: efere-se a um servidor ou computador que está hospedando um recurso ou um
site na Internet. O host é identificado por um nome de domínio (por exemplo, www.example.com)
ou um endereço IP (por exemplo, 192.168.0.1).

Rota: Rotas HTTP são como caminhos que levam a lugares na internet. Cada caminho
tem um nome, como um endereço, e quando você digita esse nome em um navegador,
ele pede ao computador daquele lugar para mostrar uma página. Por exemplo, se
você digitar "www.exemplo.com/pagina", o computador chamado "www.exemplo.com"
vai mostrar a página chamada "pagina".

Header: Os cabeçalhos HTTP fornecem informações adicionais sobre a requisição, como informações de autenticação, tipo de conteúdo aceitável, idioma preferido e outros. Os cabeçalhos são representados por pares chave-valor separados por dois pontos. Por exemplo:
```bash
Content-Type: application/json; charset=utf
Accept: application/json
```

Body: Alguns tipos de requisições podem conter um corpo, como quando você envia
dados através de um formulário HTML **ou** quando faz uma requisição POST. O corpo
contém os dados enviados pelo cliente.

## Como configurar um servidor http no node?

```js
const http = require('http');
const url = require('url');

// Cria o servidor
const server = http.createServer((req, res) => {
  // Obtém a URL e o método da requisição
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const method = req.method;

  // Define as rotas
  if (path === '/'){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Página inicial');
  } else if (path === '/contato') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Página de contato');
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Página não encontrada');
  }
});

// Inicia o servidor na porta 3000
server.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});

```

## Como configurar um servidor http no node com express?
O Express.js é um framework web rápido, flexível e minimalista para Node.js. 
Ele fornece uma camada de abstração sobre o módulo HTTP nativo do Node.js, 
facilitando a criação de aplicativos web e APIs de forma eficiente.

```js
const express = require('express');
const app = express();

// Rota para a página inicial
app.get('/', (req, res) => {
  res.send('Página inicial');
});

// Rota para a página de contato
app.get('/contato', (req, res) => {
  res.send('Página de contato');
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});

```
