# Sistema Blog
OBS: Crie o sistema utilizando as camadas Entities/Repositories

## Entidade

User {
  id: string
  nickname: string
  email: string
  password: string
  posts: array
  createdAt: string
}

Post {
  id: string
  content: string
  createdAt: string
}

## Casos de uso

- Deve ser possível criar um usuário, passando: email, password, nickname
- Deve ser possível atualizar um usuário
- Deve ser possível busca um usuário
- Deve ser possível buscar um usuário pelo id
- Deve ser possível buscar um usuário pelo email
- Deve ser possível criar um post relacionado a um usuário, passando: content

