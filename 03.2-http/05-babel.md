Para configurar o TypeScript e o Babel em uma API Node.js, você pode seguir os seguintes passos:

1. Inicialize o projeto Node.js:
   Crie uma nova pasta para o projeto e, em seguida, abra o terminal e execute o seguinte comando para iniciar um novo projeto Node.js:

   ```bash
   npm init -y
   ```

2. Instale as dependências:
   Execute o seguinte comando no terminal para instalar as dependências necessárias:

   ```bash
   npm install typescript @babel/core @babel/preset-env @babel/preset-typescript @babel/cli nodemon ts-node --save-dev
   ```

3. Configuracao do TypeScript
   Rode o comando ```npx tsc --init```


4. Configuração do Babel:
   Crie um arquivo de configuração do Babel chamado `.babelrc` na raiz do seu projeto com o seguinte conteúdo:

   ```json
   {
     "presets": [
       "@babel/preset-env",
       "@babel/preset-typescript"
     ]
   }
   ```

5. Crie um diretório `src`:
   Crie um diretório chamado `src` na raiz do seu projeto. É nesse diretório que você colocará seu código-fonte TypeScript.

6. Crie um arquivo de entrada:
   Crie um arquivo `index.ts` dentro do diretório `src` com o seguinte conteúdo:

   ```typescript
   import express from 'express';

   const app = express();

   app.get('/', (req, res) => {
     res.send('Hello, world!');
   });

   app.listen(3000, () => {
     console.log('Server is listening on port 3000');
   });
   ```

7. Atualize os scripts no `package.json`:
   Abra o arquivo `package.json` e atualize a seção de `scripts` para adicionar os seguintes comandos:

   ```json
   "scripts": {
     "start": "nodemon --exec babel-node src/index.ts",
     "build": "babel src --out-dir dist"
   }
   ```

8. Inicie o servidor:
   Agora, você pode iniciar o servidor executando o seguinte comando no terminal:

   ```bash
   npm start
   ```

   Isso usará o `nodemon` com o `babel-node` para iniciar o servidor a partir do arquivo `index.ts`.

   O Babel será responsável por transpilar o código TypeScript para JavaScript na execução.

Agora você tem uma API Node.js configurada com TypeScript e Babel. Qualquer alteração que você fizer nos arquivos do diretório `src` será automaticamente refletida e o servidor será reiniciado.