// mongodb+srv://joaozin_minecraft:KoR657RFuhBCZBdZ>@arniaturma5.hlqlsqm.mongodb.net/

# Configurando o mongo DB

1. Primeiro, você precisa ter o pacote `mongodb` instalado no seu projeto. Você pode instalá-lo usando o npm:

```
npm install mongodb
```

2. Em seguida, você pode criar um arquivo `app.js` (ou qualquer nome que desejar) e adicionar o seguinte código:

```javascript
const { MongoClient } = require('mongodb');

// URL de conexão com o MongoDB
const url = 'mongodb://localhost:27017';
// Nome do banco de dados
const dbName = 'meuBancoDeDados';
// Nome do banco de dados
const collectionName = 'minhaCollections';

const client = new MongoClient(url);
const database = client.db(dbName).collection(collectionName)

// Lógica aqui...

// Fechar conexao com o MongoDB
client.close();
```

Neste exemplo, estamos conectando ao MongoDB localmente (URL: `mongodb://localhost:27017`) e usando um banco de dados chamado `meuBancoDeDados`. Você pode substituir esses valores de acordo com a sua configuração.

O código conecta ao banco de dados, obtém uma referência para uma coleção chamada `usuarios`, insere um documento nessa coleção e, em seguida, fecha a conexão com o MongoDB.

Espero que este exemplo possa ajudá-lo a iniciar a integração com o MongoDB usando o Node.js!