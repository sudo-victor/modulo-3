
# Spy:
Um spy é um objeto que registra informações sobre chamadas de função durante os testes. Ele permite verificar se uma função foi chamada, com quais argumentos e quantas vezes. Os spies são úteis para testar o comportamento interno de um objeto ou verificar se determinadas funções foram acionadas.

Exemplo de uso de um spy com Jest em Node.js:

```javascript
// Módulo a ser testado: logger.js
function log(message) {
  // Lógica para registrar uma mensagem de log
}

module.exports = { log };
```

```javascript
// Arquivo de teste: logger.test.js
const logger = require('./logger');

test('deve registrar uma mensagem de log', () => {
  const spy = jest.spyOn(logger, 'log');

  logger.log('Mensagem de teste');

  expect(spy).toHaveBeenCalledWith('Mensagem de teste');
  expect(spy).toHaveBeenCalledTimes(1);

  spy.mockRestore(); // Restaura a função original após o teste
});
```

Nesse exemplo, estamos usando um spy para rastrear chamadas à função `log` do módulo `logger`. Podemos verificar se a função foi chamada corretamente e quantas vezes. Após o teste, é importante restaurar a função original usando `mockRestore()` para evitar interferências em outros testes.

Aqui está um exercício para você praticar:

Exercício:
Crie um módulo chamado `api.js` que possui uma função `getUser` que faz uma chamada a uma API externa para obter dados de um usuário com base em um ID. Usando Jest, escreva um teste para a função `getUser` que mocke a chamada à API e verifique se a função é chamada corretamente com o ID correto e se o resultado é manipulado corretamente.

Espero que essas explicações e exemplos tenham sido úteis para você compreender os conceitos de mock, stub e spy.