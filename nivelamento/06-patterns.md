# Padroes de Projetos


## Factory
O padrão Factory é uma técnica de programação que ajuda a criar objetos de forma
mais flexível e dinâmica. Em vez de criar objetos diretamente, o Factory usa uma
função que recebe parâmetros para determinar qual objeto deve ser criado. Dessa
forma, o código não precisa saber exatamente qual objeto está sendo criado, o que
torna o processo mais genérico e reutilizável. 

```js
// Define uma classe base para veículos
class Veiculo {
  constructor(modelo, ano) {
    this.modelo = modelo;
    this.ano = ano;
  }
}

// Define duas subclasses de veículo
class Carro extends Veiculo {
  constructor(modelo, ano) {
    super(modelo, ano);
    this.tipo = 'carro';
  }
}

class Moto extends Veiculo {
  constructor(modelo, ano) {
    super(modelo, ano);
    this.tipo = 'moto';
  }
}

// Define um Factory para criar veículos
class FabricaVeiculos {
  static criarVeiculo(tipo, modelo, ano) {
    if (tipo === 'carro') {
      return new Carro(modelo, ano);
    } else if (tipo === 'moto') {
      return new Moto(modelo, ano);
    } else {
      throw new Error('Tipo de veículo inválido!');
    }
  }
}

// Usa o Factory para criar novos veículos
const meuCarro = FabricaVeiculos.criarVeiculo('carro', 'Civic', 2021);
const minhaMoto = FabricaVeiculos.criarVeiculo('moto', 'Harley', 2022);

console.log(meuCarro); // Carro { modelo: 'Civic', ano: 2021, tipo: 'carro' }
console.log(minhaMoto); // Moto { modelo: 'Harley', ano: 2022, tipo: 'moto' }
```

## Repository
O padrão Repository é um padrão de projeto de software que separa a lógica de negócios
da camada de persistência de dados, permitindo que as operações de banco de dados
sejam isoladas em um único local. Isso simplifica o gerenciamento e a manutenção
de código que lida com dados.


```js
// Define a classe base do repositório
class Repositorio {
  constructor() {
    this.data = [];
  }

  // Método para adicionar um novo item
  adicionar(item) {
    this.data.push(item);
  }

  // Método para listar todos os itens
  listar() {
    return this.data;
  }

  // Método para buscar um item pelo índice
  buscarPorIndice(indice) {
    return this.data[indice];
  }
}

// Define uma subclasse de repositório para lidar com itens específicos
class RepositorioPessoas extends Repositorio {
  // Método para buscar uma pessoa pelo nome
  buscarPorNome(nome) {
    return this.data.find(pessoa => pessoa.nome === nome);
  }
}

// Usa o repositório para armazenar e buscar itens
const repositorioPessoas = new RepositorioPessoas();
repositorioPessoas.adicionar({ nome: 'João', idade: 25 });
repositorioPessoas.adicionar({ nome: 'Maria', idade: 30 });

console.log(repositorioPessoas.buscarPorNome('João')); // { nome: 'João', idade: 25 }
console.log(repositorioPessoas.listar()); // [{ nome: 'João', idade: 25 }, { nome: 'Maria', idade: 30 }]
```

## Dependency Injection
Injeção de dependência é um padrão de projeto que ajuda a separar a criação e a
resolução de dependências de um objeto, permitindo que as dependências sejam definidas
e gerenciadas externamente. Em outras palavras, em vez de um objeto criar suas próprias
dependências, as dependências são fornecidas a ele por uma fonte externa.

Em JavaScript, a injeção de dependência pode ser implementada de várias maneiras,
mas uma maneira comum é usar a injeção de dependência por construtor. Aqui está um exemplo simples:

```js
class Repository {
  constructor(bancodedados) {
    this.bancodedados = bancodedados;
  }

  // Método para adicionar um novo item
  adicionar(item) {
    this.bancodedados.push(item);
  }
}

// Cria as dependências
const databaseMysql = []
const databaseMongodb = []

// Cria uma instância do serviço com as dependências injetadas
const repositoryMysql = new Repository(databaseMysql);
```