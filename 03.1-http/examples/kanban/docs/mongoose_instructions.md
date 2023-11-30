# Estrutura do MongoDB

Cluster -> Listagem de banco de dados
Database -> Listagem de collections
Collection -> Listagem de objeto

# Estrutura do Mongoose

Cluster -> Listagem de banco de dados
Database -> Listagem de collections
Collection -> Listagem de schema
Schema -> Modelo de dados: Tipar e validar a tipagem

Modelo para um usuário
nome -> string, obrigatorio e tem no minimo 2 caracteres
email -> string, obrigatorio e único
password -> string, obrigatorio e no minimo 6 caracteres e no máximo 18 caracteres

## Instalacao

```
npm install mongoose
```

configurar a conexao com o cluster/client
// evento -> quando a conexao é feita com sucesso
// evento -> houve algum problema com o banco
// evento -> quando a conexao é fechada
```typescript
import { connect, connection } from "mongoose"

async function initializeDatabase() {
  // on === eventListener
  connection.on("open", () => {
    console.log("Database was connected")
  })
  await connect("url do banco")
}

```

criar os schemas
```js
import { Schema, model } from "mongoose"

const TaskSchema = new Schema({
  title: { type: String, required: true, minLength: 2  },
  content: { type: String, required: true, minLength: 1 },
  status: { type: String, default: "pending", required: true }
})

export const Task = model("Task", TaskSchema)
```

## Comandos
```js
const Product = mongoose.model('Product', ProductSchema)

await Product.create({ name: 'IPhone XR' price: 8000 })
await Product.find()
await Product.findById("6473ad9991e2b3bc84cdec48")
await Product.findByIdAndUpdate("6473ad9991e2b3bc84cdec48", { price: 7000 })
await Product.findByIdAndDelete("6473ad9991e2b3bc84cdec48")
```