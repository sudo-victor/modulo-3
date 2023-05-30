Podemos ir muito além da simples configuracão de tipagem em cada atributo, podendo adicionar configuraoes como:
- Timestamps
- Obrigatório
- Caracter máximo
- Caracter mínimo
- Limite máximo do número
- Limite mínimo do número
- Valor padrão

## Timestamps
Para adicionar automaticamente campos de createdAt e updatedAt em um schema do Mongoose, você pode utilizar a opção timestamps. Essa opção cria automaticamente os campos e atualiza seus valores sempre que um documento é criado ou atualizado.

### Habilitar o createdAt e updatedAt ao mesmo tempo
```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    email: String,
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);
```

### Habilitar de forma específica, createdAt ou updatedAt

```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    email: String,
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

const User = mongoose.model('User', userSchema);
```

## Obrigatório

```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  }
});

const User = mongoose.model('User', userSchema);
```

## Carácter máximo

```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    maxlength: 100,
  },
});

const User = mongoose.model('User', userSchema);
```

## Carácter mínimo

```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
  },
  email: {
    type: String,
    minlength: 5,
  },
});

const User = mongoose.model('User', userSchema);
```

## Limite máximo de número

```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  age: {
    type: Number,
    max: 18,
  },
  score: {
    type: Number,
    max: 0,
  },
});

const User = mongoose.model('User', userSchema);
```

## Limite minimo de número

```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {}
  age: {
    type: Number,
    min: 18,
  },
  score: {
    type: Number,
    min: 0,
  },
});

const User = mongoose.model('User', userSchema);
```

## Padrão

```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    default: 'John Doe',
  },
  age: {
    type: Number,
    default: 25,
  },
  email: {
    type: String,
    default: 'example@example.com',
  },
});

const User = mongoose.model('User', userSchema);
```
