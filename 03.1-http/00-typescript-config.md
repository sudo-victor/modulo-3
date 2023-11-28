Para configurar o TypeScript e o Babel em uma API Node.js, você pode seguir os seguintes passos:

1. Inicialize o projeto Node.js:
   Crie uma nova pasta para o projeto e, em seguida, abra o terminal e execute o seguinte comando para iniciar um novo projeto Node.js:

   ```bash
   npm init -y
   ```

2. Instale as dependências:
   Execute o seguinte comando no terminal para instalar as dependências necessárias:

   ```bash
   npm install typescript tsx tsup
   ```

3. Configuração do TypeScript:
   Crie um arquivo de configuração do TypeScript utilizando o comando ```npx tsc --init```, com isso deve criar um arquivo como:

   ```json
   {
     "compilerOptions": {
       "target": "es2018",
       "module": "commonjs",
       "outDir": "dist",
       "strict": true,
       "esModuleInterop": true
     },
     "include": ["src"],
     "exclude": ["node_modules"]
   }
   ```

4. Configuração dos scripts:
   Adicione os scripts no arquivo ```package.json```:

   ```json
   {
     "scripts": {
         "start": "tsx src/index.ts",
         "start:dev": "tsx watch src/index.ts",
         "build": "tsup src",
         "test": "vitest"
      },
   }
   ```
