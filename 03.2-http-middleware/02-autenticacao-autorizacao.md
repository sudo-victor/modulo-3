Para criar um middleware de autenticação utilizando o Express e o JsonWebToken (jsonwebtoken), você pode seguir os passos abaixo:

1. Instale as dependências necessárias executando o seguinte comando no terminal:

```shell
npm install express jsonwebtoken
```

2. Crie um arquivo `middleware/auth.js` para definir o middleware de autenticação. Neste arquivo, importe o módulo `jsonwebtoken` e defina a função do middleware da seguinte maneira:

```javascript
const jwt = require('jsonwebtoken');

// Função do middleware de autenticação
function authMiddleware(req, res, next) {
  // Obtenha o token do cabeçalho da requisição
  const token = req.headers.authorization;

  // Verifique se o token existe
  if (!token) {
    return res.status(401).json({ message: 'Token não fornecido.' });
  }

  try {
    // Verifique se o token é válido
    const decoded = jwt.verify(token, 'chave_secreta'); // Substitua 'chave_secreta' pela sua chave de assinatura

    // Adicione as informações do usuário autenticado ao objeto de solicitação (req) para uso posterior
    req.user = decoded;

    // Continue para a próxima rota ou middleware
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido.' });
  }
}

module.exports = authMiddleware;
```

3. Em seu arquivo principal do aplicativo, provavelmente chamado `app.js` ou `index.js`, importe o módulo `express` e o middleware de autenticação criado:

```javascript
const express = require('express');
const authMiddleware = require('./middleware/auth');

const app = express();

// Rotas públicas
// ...

// Rotas autenticadas usando o middleware de autenticação
app.use(authMiddleware);
// Rotas autenticadas
// ...

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
```

Agora, todas as rotas abaixo da declaração `app.use(authMiddleware)` serão protegidas pelo middleware de autenticação. Isso significa que o cliente precisará fornecer um token JWT válido no cabeçalho `Authorization` para acessar essas rotas.

Lembre-se de substituir `'chave_secreta'` pela sua própria chave de assinatura ao chamar a função `jwt.verify()` dentro do middleware de autenticação. Essa chave deve corresponder à chave usada para assinar os tokens JWT ao fazer login ou criar tokens de acesso.