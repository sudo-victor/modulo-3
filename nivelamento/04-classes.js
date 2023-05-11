// A partir do ECMAScript 2015 (também conhecido como ES6), o JavaScript introduziu
// a sintaxe de classe para permitir que os desenvolvedores criem objetos e definam
// seu comportamento de forma mais fácil e intuitiva. Aqui está um exemplo de como
// declarar uma classe no JavaScript:

// Sintaxe de classe

class NomeDaClasse {
  constructor(parametros) {
    // código a ser executado quando um objeto da classe é criado
  }

  // métodos da classe
  metodo1(parametros) {
    // código a ser executado pelo método 1
  }

  metodo2(parametros) {
    // código a ser executado pelo método 2
  }

  // ... outros métodos da classe
}

// Método Constructor

// O método especial constructor é chamado automaticamente quando um novo objeto
// da classe é criado, permitindo a definição de valores iniciais para as propriedades do objeto.
// Para criar um novo objeto da classe, utilizamos a palavra-chave new,
// seguida do nome da classe e seus parâmetros, se houverem:

const obj = new NomeDaClasse(parametros);

// Podemos acessar as propriedades e métodos de um objeto da classe utilizando o operador ponto (.):

obj.propriedade; // acessa o valor da propriedade
obj.metodo(parametros); // chama o método com os parâmetros fornecidos

// Também é possível criar classes filhas (subclasses) que herdam propriedades
// e métodos da classe pai (superclasse):

class Subclasse extends NomeDaClasse {
  constructor(parametros) {
    super(parametros); // chama o construtor da classe pai
    // código adicional para a subclasse
  }

  // métodos adicionais da subclasse
}

// ========================== POO ============================

// POO (Programação Orientada a Objetos) é um paradigma de programação que se
// baseia na ideia de que os programas são compostos por objetos que interagem
// entre si para realizar tarefas. Os objetos são instâncias de classes, que
// definem suas propriedades (atributos) e comportamentos (métodos).

// Os conceitos fundamentais de POO são:

// Classe: uma classe é uma estrutura que define um tipo de objeto, descrevendo
// seus atributos e comportamentos.

// Objeto: um objeto é uma instância de uma classe, com seus próprios valores
// de atributos e comportamentos específicos.

// Atributo: um atributo é uma característica de um objeto que descreve seu
// estado. Também é conhecido como propriedade ou variável de instância.

// Método: um método é uma ação que um objeto pode realizar, que pode alterar
// seu estado interno ou retornar um valor. Também é conhecido como função de instância.

// Encapsulamento: o encapsulamento é o conceito de manter os detalhes internos
// de uma classe ocultos de outros objetos, permitindo que a classe seja modificada
// sem afetar o comportamento de outros objetos.

// Herança: a herança é o conceito de criar uma nova classe a partir de uma
// classe existente, que herda seus atributos e comportamentos. Isso permite a
// criação de classes mais especializadas e a reutilização de código.

// Polimorfismo: o polimorfismo é o conceito de que um objeto pode ter muitas formas
// (poli = muitos, morphos = formas). Isso permite que um objeto seja tratado
// como se fosse de um tipo diferente, dependendo do contexto em que é utilizado.


// ========================== Padrao Repository ==========================


// O padrão Repository é um padrão de projeto de software que abstrai o acesso a
// dados em uma aplicação, permitindo que o código cliente interaja com os dados
// de forma independente da fonte de dados. Em outras palavras, ele fornece uma
// interface comum para acesso aos dados, independentemente de como eles são armazenados ou acessados.

// Em JavaScript, o padrão Repository é comumente usado em conjunto com bancos de
// dados ou APIs RESTful para abstrair a lógica de acesso aos dados e permitir que
// o código cliente interaja com eles de forma mais simples e intuitiva.

// Exemplo

const databasePacientes = []

class PacientesRepository {
  create() {}
  findById() {}
  findAll() {}
  delete() {}
  updateById() {}
}

const pacienteRepository = new PacientesRepository()
