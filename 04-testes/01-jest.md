Para configurar o Jest em um projeto Node.js, siga as etapas abaixo:

Passo 1: Inicialize o projeto Node.js
Certifique-se de que o seu projeto Node.js esteja configurado corretamente com um arquivo `package.json`. Se você ainda não tiver um, pode criar um novo usando o seguinte comando no terminal na raiz do seu projeto:

```
npm init -y
```

Passo 2: Instale o Jest
Instale o pacote do Jest como uma dependência de desenvolvimento no seu projeto executando o seguinte comando no terminal:

```
npm install --save-dev jest
```

Passo 3: Rode um comando no terminal, que irá criar um arquivo chamado `jest.config.js`. o comando:

```
npx jest --init
```

Aqui, estamos definindo o ambiente de teste como `node`, indicando que os testes serão executados em um ambiente Node.js.

Passo 4: Escreva seus testes
Crie um diretório chamado `__tests__` (ou `test`) na raiz do seu projeto e coloque seus arquivos de teste dentro dele. Certifique-se de que seus arquivos de teste terminem com `.test.js` ou `.spec.js` para que o Jest possa encontrá-los automaticamente.

Aqui está um exemplo de teste básico para um arquivo `sum.js` que contém uma função `sum` que soma dois números:

```javascript
// sum.js
function sum(a, b) {
  return a + b;
}

module.exports = sum;
```

```javascript
// sum.test.js
const sum = require('./sum');

test('deve retornar a soma de dois números', () => {
  expect(sum(2, 3)).toBe(5);
});
```

Passo 5: Execute os testes
Agora, você pode executar seus testes usando o Jest. Adicione um script ao seu arquivo `package.json` para facilitar a execução dos testes. No campo `"scripts"`, adicione o seguinte:

```json
"scripts": {
  "test": "**node --experimental-vm-modules node_modules/jest/bin/jest.js**"
}
```

Agora, você pode executar seus testes no terminal usando o comando:

```
npm test
```

O Jest encontrará e executará automaticamente todos os arquivos de teste encontrados no diretório `__tests__` (ou `test`) e fornecerá os resultados no terminal.

Essas são as etapas básicas para configurar o Jest em um projeto Node.js. Você também pode personalizar ainda mais a configuração do Jest para atender às suas necessidades específicas, como adicionar plugins, configurar cobertura de código, etc. Consulte a documentação oficial do Jest para obter mais informações sobre as opções de configuração disponíveis: [https://jestjs.io/docs/configuration](https://jestjs.io/docs/configuration)