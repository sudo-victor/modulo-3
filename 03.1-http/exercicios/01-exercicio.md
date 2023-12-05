# Controle de Estoque

- Typescript
- Express
- Mongoose
- Dotenv

## Entities

Produto
- id: ObjectId
- name: String
- code: String(As 3 primeiras letras do nome do produto + a data atual)
- amount: Number
- createdAt: Date

## UseCases (Funcionalidades)

- Deve ser possível criar um produto no sistema, passando: name e amount
- Deve ser possível incrementar um produto no sistema, passando: id
- Deve ser possível decrementar um produto no sistema, passando: id
- Dever ser possível buscar um produto no sistema, passando: code
- Dever ser possível remover um produto no sistema, passando: code