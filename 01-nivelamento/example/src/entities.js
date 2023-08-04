let idCount = 0
class Funcionario {
  constructor(data) {
    this.nome = data.nome;
    this.dataNascimento = data.dataNascimento;
    this.salario = data.salario;
    this.createdAt = new Date();
    this.code = ++idCount
  }
}

class Gerente extends Funcionario {
  constructor(data) {
    super(data)
    this.departamento = data.departamento
  }
}

class Desenvolvedor extends Funcionario {
  constructor(data) {
    super(data)
    this.tecnologia = data.tecnologia
  }
}

module.exports = {
  Funcionario,
  Gerente,
  Desenvolvedor
}
