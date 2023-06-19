Em HTTP, um middleware é uma função que processa a requisição HTTP antes que ela seja tratada pela rota final. Ele age como uma camada intermediária entre a requisição e a resposta, permitindo que você execute várias ações, como autenticação, validação de dados, manipulação de cabeçalhos, entre outras, antes que a rota final seja executada.

No Express, um framework web popular para Node.js, você pode criar middlewares usando a função `app.use()` ou `router.use()`. Aqui está um exemplo de como criar um middleware simples no Express:

```javascript
const express = require('express');
const app = express();

// Middleware
app.use((err, req, res, next) => {
  // Executa alguma lógica antes de prosseguir para a próxima função de middleware ou rota

  // Por exemplo, você pode fazer alguma validação ou adicionar informações à requisição
  req.customData1 = 'Informação personalizada';

  // Chama a próxima função de middleware
  next();
});

function middleware(req, res, next) => {
  // Executa alguma lógica antes de prosseguir para a próxima função de middleware ou rota

  // Por exemplo, você pode fazer alguma validação ou adicionar informações à requisição
  req.customData2 = 'Informação personalizada 2';

  // Chama a próxima função de middleware
  next();
}

// Rota
app.get('/', middleware, (req, res) => {
  // Acesso à informação personalizada adicionada pelo middleware
  console.log(req.customData1, req.customData2);

  // Envie a resposta
  res.send('Hello, World!');
});

// Inicia o servidor
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
```

Nesse exemplo, o middleware é definido usando `app.use()`, e é uma função que recebe três parâmetros: `req` (objeto de requisição), `res` (objeto de resposta) e `next` (uma função que deve ser chamada para passar para o próximo middleware ou rota). 

Dentro do middleware, você pode executar qualquer lógica necessária, como autenticação, manipulação de cabeçalhos, etc. No exemplo acima, ele adiciona uma propriedade personalizada chamada `customData` ao objeto de requisição antes de chamar `next()` para passar para a rota final.

É importante chamar `next()` para garantir que a execução prossiga para a próxima função de middleware ou rota. Se você não chamar `next()`, a requisição ficará presa no middleware e a resposta não será enviada ao cliente.

Lembre-se de que a ordem dos middlewares é importante, pois eles são executados na ordem em que são definidos.


Interceptor / Guard / Middleware
