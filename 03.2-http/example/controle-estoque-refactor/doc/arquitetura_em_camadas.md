# Arquitetura em camadas

## Interface

Definiao do meio de comunicacao com o nosso sistema

Routas -> POST -> /products
Controllers -> Funcao que será executada quando uma rota for chamada

## Lógica

Regras de negócio

Service

## Dados

Manipulacao de dados, definicao de formato de dados

Repository
Domain/Schema/Entidade


## ORDEM

Interface -> lógica -> dados
Routas -> Controllers -> Services -> Repository -> Schema