# Arniafy

## Entidades

Song {
  title
  author
  releasedAt
  category
}

User {
  username
  songs
}

## Casos de uso

- Deve ser possivel cadastrar um usuário: username
- Deve ser possivel adicionar uma musica na "songs" de um usuário: nome da musica, genero, autor, data de lancamento


Arquitetura de Software
N-Tier === Arquitetura em Camadas

3 - Dados -> Database, Repositorio, Entities
2 - Lógicas -> Service
1 - Apresentacao -> Início

