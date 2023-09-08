# Sistema de Aluguel de Carros

## Entidade

Concessionária {
  nome: String,
  localização: String,
  carrosDisponíveis: Number,
}

Aluguel {
  usuário: ObjectId,
  concessionária: ObjectId,
  dataRetirada: Date,
  dataDevolução: Date,
  status: String,
}

Usuário {
  nome: String,
  email: String,
  senha: String,
  aluguéis: ObjectId[],
}

## Funcionalidades

1. **Cadastro de Usuário:**
   - Um novo usuário se cadastra fornecendo um nome, um endereço de e-mail e uma senha.
   - Os dados do usuário são validados para garantir que o e-mail seja único.
   - Um registro do usuário é criado no banco de dados com as informações fornecidas.

2. **Login de Usuário:**
   - Um usuário registrado insere seu endereço de e-mail e senha.
   - O sistema verifica se as credenciais estão corretas e autentica o usuário.

3. **Busca de Concessionárias:**
   - Os usuários podem pesquisar concessionárias com base em critérios como localização e datas de retirada e devolução do veículo.
   - O sistema retorna uma lista de concessionárias que atendem aos critérios de busca.

4. **Aluguel de Carro:**
   - Os usuários podem fazer um aluguel de carro em uma concessionária selecionada.
   - Eles escolhem as datas de retirada e devolução do veículo.
   - O sistema verifica a disponibilidade de carros e confirma o aluguel se houver carros disponíveis.
   - O aluguel é registrado no banco de dados.

5. **Visualização de Aluguéis do Usuário:**
   - Os usuários podem visualizar seus aluguéis atuais.
   - As informações sobre cada aluguel, incluindo concessionária, datas e status, são exibidas.

6. **Cancelamento de Aluguel:**
   - Os usuários podem cancelar um aluguel existente antes da data de retirada.
   - O sistema atualiza o status do aluguel e disponibiliza os carros cancelados novamente para aluguéis futuros.
