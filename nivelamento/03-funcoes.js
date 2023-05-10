// Sintaxe da Funçao

/**
 * 
 * 1 - function
 * 2 - nomeDaFunçao
 * 3 - parametros
 * 4 - corpo
 * 5 - retorno
 * 
 */

// Estados de uma funçao

/**
 * 
 *  1 - Declaraçao
 *  2 - Execuçao
 * 
 */

// Declaração de função literal: é a forma mais comum e simples de declarar uma função.
// Basta usar a palavra-chave function seguida do nome da função e seus parâmetros
// entre parênteses, e o corpo da função entre chaves. Exemplo:

function myFunction(param1, param2) {
  // Corpo da função
  // Pode incluir declarações de variáveis, operações lógicas, loops, etc.
}

// Expressão de função: é uma forma alternativa de declarar uma função atribuindo-a
// a uma variável ou constante. Nesse caso, a função não precisa de um nome,
// mas é acessada através do nome da variável ou constante. Exemplo:

const myExpressionFunction = function(param1, param2) {
  // Corpo da função
  // Pode incluir declarações de variáveis, operações lógicas, loops, etc.
};

// Arrow function: é uma forma ainda mais simplificada de declarar uma função.
// As arrow functions foram introduzidas no ES6 e são uma sintaxe mais clara
// e concisa para funções simples. Exemplo:

const myArrowFunction = (param1, param2) => {
  // Corpo da função
  // Pode incluir declarações de variáveis, operações lógicas, loops, etc.
};

// Closure Function: Uma closure function (função de fechamento) em JavaScript
// é uma função que tem acesso a variáveis ​​em seu escopo externo, mesmo após a
// execução da função ter sido concluída. Essa funcionalidade é possível devido
// à maneira como o JavaScript lida com a escopagem de variáveis.

const closureFunction = () => {
  // Corpo da função
  // Pode incluir declarações de variáveis, operações lógicas, loops, etc.
  return () => {}
}

// Padrao Factory

// O padrão Factory (ou fábrica) é um padrão de projeto de software que visa a
// criar objetos sem expor explicitamente a lógica de sua criação. Em outras palavras,
// ele encapsula a criação de objetos em uma função ou classe que pode ser
// reutilizada para criar vários tipos de objetos.

// Factory para criar objetos de forma dinâmica
function criarPessoa(nome, idade) {

  // código
  const pessoa = {
    id: 'pessoa_id' + new Date(),
    nome,
    idade,
    imprimir: function() {
      console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`)
    }
  }

  return pessoa
}

// Criação de objetos usando a factory
const pessoa1 = criarPessoa("João", 30);
const pessoa2 = criarPessoa("Maria", 25);

// Chamada do método imprimir em cada objeto
pessoa1.imprimir(); // imprime "Meu nome é João e eu tenho 30 anos."
pessoa2.imprimir(); // imprime "Meu nome é Maria e eu tenho 25 anos."
