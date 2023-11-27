# HTTP Parte 2
REQ -> RES
## Status HTTP

Os códigos de status HTTP informam ao cliente sobre o resultado de uma determinada solicitação. Eles são parte essencial da comunicação HTTP e ajudam a identificar se uma operação foi bem-sucedida ou se ocorreu algum erro.

### Estrutura

Os códigos de status HTTP são compostos por três dígitos e divididos em cinco classes:

200 - ok
201 - created
204 - ok, no content

400 - bad request
401/403 - Permissoes e autenticacao
404 - Not found

500 - Internal Server Error
503 - Bad Gateway

- **1xx (Informativos)**: Informam que a solicitação foi recebida e está sendo processada.
- **2xx (Sucesso)**: Confirmam que a solicitação foi processada com sucesso.
- **3xx (Redirecionamento)**: Indicam que ações adicionais são necessárias para concluir a solicitação.
- **4xx (Erros do Cliente)**: Representam erros causados pelo cliente, como solicitações malformadas.
- **5xx (Erros do Servidor)**: Sinalizam erros no servidor que impedem o processamento da solicitação.

### Códigos Mais Comuns

- **200 (OK)**: Tudo correu bem com a requisição.
- **201 (Created)**: Indica sucesso na criação de um novo recurso.
- **204 (No Content)**: A solicitação foi bem-sucedida, mas não há conteúdo a ser retornado.
- **400 (Bad Request)**: A solicitação foi malformada ou inválida.
- **401 (Unauthorized)**: A autenticação é necessária ou falhou.
- **403 (Forbidden)**: O cliente está autenticado, mas não tem permissão para acessar o recurso.
- **404 (Not Found)**: O recurso solicitado não foi encontrado.
- **500 (Internal Server Error)**: Erro interno no servidor.

## Como Passar Informações em uma Requisição?

A comunicação HTTP envolve a transmissão de várias informações entre o cliente e o servidor. Aqui estão as principais formas:

### Header (Cabeçalho)

O cabeçalho contém metadados sobre a transação, como tipo de conteúdo, autenticação e outros. Por exemplo:

```javascript
const header = req.headers;
```

### Body (Corpo)

O corpo contém o conteúdo real da transação, como dados JSON, texto ou arquivos.

```javascript
const body = req.body;
```

### Params (Parâmetros)

Os parâmetros são usados para fornecer informações específicas sobre a operação desejada, geralmente inseridos na URL.

```javascript
const params = req.params;
```

### Query (Consulta)

A consulta contém informações adicionais na URL para filtrar ou pesquisar recursos específicos.

```javascript
const query = req.query;
```

http://localhost:3333/products?name=camisa&price=100
