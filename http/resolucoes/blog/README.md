# Blog

## Entidades

### Post
- author
- content
- createdAt
- likes

## Funcionalidades
- Deve ser possível criar um post, passando: author, content
- Deve ser possível dar like em um post
- Deve ser possível buscar todos os posts de um author
- Deve ser possível buscar todos os posts
- Deve ser possível Deletar um post

1 - Configurar Typescript - feito
2 - Configurar Banco de Dados - feito
2.1 - Configurar variáveis de ambiente - feito
3 - Configurar Express - feito

Para cada funcionalidade
1 - Cria a rota (com express)
2 - Cria o controller(responsável por lidar com o cliente)
3 - Cria o service (responsável pela lógica da funcionalidade)
4 - Cria o repository (responsável por manipular o banco de dados)

-> === "precisar"
repository -> database
service -> repository
controller -> service
