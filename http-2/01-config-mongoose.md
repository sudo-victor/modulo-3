# Configurando o mongoose

## Instalacao

```bash
npm install mongoose
```

## Configuracao da conexao

```js
const mongoose = require('mongoose');

function initializeDatabase() {
  mongoose.connect("URL do MONGODB")
}

function closeDatabase() {
  mongoose.disconnect();
}
```

## Configuracao da Entidade/Schema/Model

```js
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
})

const Product = mongoose.model('Product', ProductSchema)
```


## Algumas Queries

```js
const Product = mongoose.model('Product', ProductSchema)

await Product.create({ name: 'IPhone XR' price: 8000 })
await Product.find()
await Product.findById("6473ad9991e2b3bc84cdec48")
await Product.findByIdAndUpdate("6473ad9991e2b3bc84cdec48", { price: 7000 })
await Product.findByIdAndDelete("6473ad9991e2b3bc84cdec48")
```
