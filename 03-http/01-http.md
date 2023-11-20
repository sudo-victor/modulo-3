# O que é HTTP

HTTP (Protocolo de Transferência de Hipertexto) é um protocolo padrão usado para a comunicação entre clientes (como navegadores da web) e servidores na World Wide Web (WWW). Ele define como as mensagens são formatadas e transmitidas e as ações que servidores e navegadores devem tomar em resposta a comandos específicos.

## Estrutura de uma Requisição e Resposta

### Host
O host refere-se ao servidor ou computador que hospeda um recurso ou site na Internet. É identificado por um nome de domínio (por exemplo, `www.example.com`) ou um endereço IP (por exemplo, `192.168.0.1`), e é responsável por processar as requisições recebidas e enviar as respostas adequadas.

<!-- Host -> Servidor
Servidor tem um endereco -> IP -->


Servidor -> Sistema

Campo Grande é o endereco do servidor
Endereco:Porta/Rota -> url

Request

# Header
- Qual é a url do client
- Qual formato de dado o client ta enviando
- Qual formato o cliente quer receber a resposta
# Body
- Informacao que o cliente envia para o servidor
- Formatos: JSON, Text
# Params
- http://url/products/2
# Query
- http://url/products?page=1&maxItems=10

DELETE http://url/products/

# Methods
GET -> Buscar recursos
POST -> Salvar recursos
PUT -> Atualizar Todas as infos do Recurso
PATCH -> Atualizar Recursos
DELETE -> Remove o recurso

Response

# Header
- O formato de retorno
- Qual o caminho da request
# Body
- JSON, HTML, XML, TEXT
# Status
1xx -> Informativo
2xx -> Sucesso
3xx -> Redirecionamento
4xx -> Erro do lado do client
5xx -> Erro do lado do servidor


### Rota
As rotas HTTP definem os caminhos disponíveis em um servidor web. Cada rota corresponde a um recurso específico, e quando você acessa uma rota através de um navegador, ele solicita ao servidor correspondente para fornecer o conteúdo desejado.

### Header
Os cabeçalhos HTTP incluem informações adicionais sobre a requisição ou resposta, como tipo de conteúdo, autenticação, idioma, entre outros. Os cabeçalhos são **representados** por pares chave-valor. Exemplo:

```bash
Content-Type: application/json; charset=utf-8
Accept: application/json
```

### Body
O corpo da requisição contém dados enviados pelo cliente, geralmente usados em métodos como POST ou PUT. Pode incluir informações como detalhes de um formulário HTML ou dados JSON.

## Métodos HTTP

Os métodos HTTP indicam a ação desejada a ser executada no recurso especificado. São eles:

- **GET**: Recupera dados.
- **POST**: Cria um novo recurso.
- **PUT**: Atualiza um recurso existente.
- **PATCH**: Modifica parcialmente um recurso.
- **DELETE**: Remove um recurso.

## Como configurar um servidor HTTP no Node com Express?

Express.js é um framework web para Node.js que simplifica a construção de aplicativos web e APIs. Ele fornece uma abstração sobre o módulo HTTP nativo do Node.js, tornando mais fácil definir rotas, manipular requisições e respostas, e integrar middleware.

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
