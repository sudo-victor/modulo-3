# Cadastro de usuários

## Entidade

User {
  name: String,
  email: String,
  password: String,
  photo: String,
}

## Funcionalidades

- Deve ser possível criar um usuário passando: nome, email, password e um arquivo
- Deve ser possível listar os usuários
- Deve ser possivel se autenticar com email e senha
- Crie rotas privadas no sistema
- Crie uma entidade photo para relacionar com user
- Crie uma entidade "Post" para se relacionar com um user
