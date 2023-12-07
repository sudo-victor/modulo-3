# Sistema de Gerenciamente de tarefas - KANBAN

## Entidades
Tarefa
- title -> string[Required]
- content -> string[Required]
- status -> string[Required] Pendente, Fazendo, Concluido
- user -> ObjectId

User
- name -> string[Required, minLength(3)]
- email -> string[Unique, Required]

## Functionalidades
[x] - Deve ser possível criar um usuário, passando: name e email
[x] - Dever ser possível criar uma tarefa, passando: id do usuário, title e content
[x] - Deve ser possível atualizar o status de uma tarefa, passando: id da tarefa e status
[ ] - Deve ser possível atualizar o usuário de uma tarefa, passando: id da tarefa e id do usuário novo
[ ] - Deve ser possível listar todas as tarefas pelo id de um usuário
[ ] - Deve ser possível listar todas as tarefas

# CONFIG

[x] - Typescript
[x] - Express
[x] - Mongoose
[x] - Dotenv (NV UMA COISA ASSIM)