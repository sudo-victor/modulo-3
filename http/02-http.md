# HTTP Part 2

## Status HTTP
Os status HTTP são códigos numéricos que são enviados pelo servidor em resposta a uma solicitação feita por um cliente, como um navegador da web. Eles fornecem informações sobre o resultado da solicitação e o estado da comunicação entre o cliente e o servidor.

### Estrutura
Os status HTTP são compostos por três dígitos, agrupados em cinco classes:

- 1xx (Informational): Indica que a solicitação foi recebida e o servidor está processando-a.
- 2xx (Success): Indica que a solicitação foi bem-sucedida e o servidor conseguiu processá-la.
- 3xx (Redirection): Indica que a solicitação foi recebida, mas o cliente deve realizar alguma ação adicional para completar a solicitação.
- 4xx (Client Error): Indica que ocorreu um erro por parte do cliente, como uma solicitação inválida ou acesso não autorizado.
- 5xx (Server Error): Indica que ocorreu um erro no servidor ao processar a solicitação.

### Mais comuns

- 200(OK): Sucesso -> Tudo OK com a requisicao
- 201(Created): Criado -> Solicitacao bem-sucedida de criação de um novo recurso. 
- 204(No Content): Sem conteúdo -> Solicitação bem-sucedida em que não há conteúdo para ser enviado de volta ao cliente.
- 400(Bad Request): Requisicao feita de forma errada -> Indica que a solicitação do cliente é inválida ou malformada. Pode ocorrer devido a erros de sintaxe ou conteúdo incorreto na solicitação.
- 401(Unauthorized): Nao autorizado -> Indica que a solicitação requer autenticação. O cliente deve fornecer credenciais válidas para acessar o recurso.
- 403(Forbidden): Sem permissao, mesmo autenticado -> Indica que o servidor entendeu a solicitação, mas se recusa a fornecer acesso ao recurso, mesmo que o cliente esteja autenticado. Diferente do status 401, que indica falta de autenticação, o 403 indica que a autenticação foi bem-sucedida, mas o acesso é proibido.
- 404(Not Found): Indica que o recurso solicitado não foi encontrado no servidor. É um dos erros mais comuns encontrados ao navegar na web.
- 500(Internal Server Error): Deu ruim internamente no sistema!!! -> Indica um erro interno do servidor. É um código genérico para indicar que algo deu errado no lado do servidor, sem fornecer detalhes específicos sobre o problema.

## Formas de Passar Informacoes em uma Requisicao?

- Header (Cabeçalho): O cabeçalho HTTP é uma parte da solicitação ou resposta que contém informações adicionais sobre a transação em andamento. Ele inclui detalhes como o tipo de conteúdo, tamanho, cookies, autenticação, idioma preferido, cache, entre outros. Os cabeçalhos são compostos por pares chave-valor e fornecem metadados sobre a solicitação ou resposta.

```js
app.get('/minha_rota', (req, res) => {
  const header = req.headers
  // ou
  const { headers } = req
})
```

- Body (Corpo): O corpo HTTP é uma parte da solicitação ou resposta que contém o conteúdo real da transação. Ele pode conter dados como texto, JSON, XML, imagens, arquivos binários ou qualquer outro tipo de informação. O corpo é opcional em algumas solicitações e respostas, mas geralmente é usado para transportar dados significativos entre o cliente e o servidor.

```js
app.get('/minha_rota', (req, res) => {
  const body = req.body
  // ou
  const { body } = req
})
```

- Params (Parâmetros): Os parâmetros referem-se a informações incluídas em uma solicitação HTTP para fornecer dados específicos sobre a operação desejada. Eles são frequentemente usados em solicitações GET e são anexados à URL. Por exemplo, em uma URL como "http://exemplo.com/recurso/123", o parâmetro "123" é usado para especificar o recurso desejado.

```js
app.get('/minha_rota', (req, res) => {
  const params = req.params
  // ou
  const { params } = req
})
```

- Query (Consulta): A consulta refere-se à parte da URL que contém informações adicionais para filtrar, classificar ou pesquisar recursos específicos. É comumente usado em solicitações GET para fornecer critérios de busca. Por exemplo, em uma URL como "http://exemplo.com/produtos?categoria=eletronicos", a consulta "categoria=eletronicos" é usada para filtrar produtos pela categoria "eletrônicos".

```js
app.get('/minha_rota', (req, res) => {
  const query = req.query
  // ou
  const { query } = req
})
```

Esses elementos são usados para estruturar e transmitir informações entre clientes e servidores por meio do protocolo HTTP. Cada um desempenha um papel importante na definição e execução de solicitações e respostas HTTP.