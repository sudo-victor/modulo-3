# Sistema de Controle Financeiro

## Configuracoes

[x] - Iniciar o projeto node(init, script, criar pastas iniciais)
[x] - Configurar o banco de dados
[x] - Estruturar os domínios
[ ] - Lógica(Servicio, Repositorio)
[ ] - Interface para manipular a lógica

## Transaction
value -> number
description -> string
kind -> 'withdraw' or 'deposit'
createdAt -> Date
canceledAt -> Date

## Funcionalidades
[x] - Deve ser capaz de fazer uma transacao, passando: value, description and kind.
[ ] - Deve ser possivel buscar todas as transacoes
[ ] - Deve ser possivel buscar apenas as transacoes do tipo "withdraw"
[ ] - Deve ser possivel buscar apenas as transacoes do tipo "deposit"
[ ] - Deve ser possivel buscar uma transacao pelo id
[ ] - Deve ser possivel cancelar uma transacao buscando pelo id e atualizando o canceledAt

// Arquitetura -> N-Tier / Camadas

// Interface -> Disponibilizar uma meio de interacao com nosso sistema: Rest API, Soap, GraphQL, CLI, HTML/CSS
// Lógica -> Regras de negócio / use case / service
// Dados -> Manipular os dados
