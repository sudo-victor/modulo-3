# Sistema de campeonato interclasse

## Entidade/Domain
Em um contexto de desenvolvimento de software, uma entidade no backend geralmente
se refere a um objeto ou conceito que representa algo do mundo real. Essas entidades
são usadas para modelar e armazenar dados no sistema.

### Team
- name (string)
- point (number)
- category (string)
- playersAmount (number)

## Requisitos
[] Deve ser possível cadastrar um time, passando as informacoes: nome, pontos, categoria
e qtd. integrante.
[] Deve ser possível buscar um time pelo nome(LIKE QUERY)
[] Deve ser possível buscar os times com pontuacao acima de 10(Greater than QUERY)
[] Deve ser possível buscar todos os times de uma determinada categoria
[] Deve ser possível atualizar os pontos do time passando o seu id
[] Deve ser possível deletar cada time pelo id
