// Em JavaScript, existem várias estruturas de dados que você pode usar para armazenar
// e manipular dados. Aqui estão algumas das estruturas de dados mais comuns em JavaScript:

// 1 - Arrays: são listas de valores que podem ser acessados e manipulados usando
// um índice numérico. Eles podem armazenar valores de qualquer tipo de dados, incluindo outros arrays.

// Existem várias maneiras de declarar um array em JavaScript:

// Literal de array: é a forma mais comum de declarar um array,
// usando colchetes [] e separando cada elemento por vírgulas. Exemplo:

const myArray = [1, 2, 3, 4, 5];

// Construtor de Array: é uma forma alternativa de declarar um array usando o
// construtor Array. Você pode passar os elementos como argumentos para o construtor. Exemplo:

const myArrayMadeByConstructor = new Array(1, 2, 3, 4, 5);
const teste = new Array("asd", {}, 1)

// Array.from(): é uma função estática do objeto Array que cria um novo array
// a partir de um objeto semelhante a uma matriz ou iterável. Exemplo:

const myString = "hello";
const teste2 = [1, 2, 3]
const myArrayWithFromFunction = Array.from(teste2);

// Métodos famosos

// push - adiciona o item na ultima posiçao
myArrayWithFromFunction.push(7, 2, "")
// pop - remove o item na ultima posiçao
myArrayWithFromFunction.pop()
// unshift - adiciona o item na primeira posiçao
myArrayWithFromFunction.unshift(7, 2, "")
// shift - remove o item na primeira posiçao
myArrayWithFromFunction.shift()

// ITERACAO

// map - percorre cada item, formata e retorna um array diferente
// filter - ele filtra o array e retorna um array novo
const numeros = [1, 2, 3, 4, 5, 6, 7, 8]
const apenasNumerosImpares = numeros.filter((numeroAtual) => {
  return (numeroAtual % 2) !== 0
})
// find - ele percorre cada item, e retorna o primeiro encontrado com uma certa lógica
// findIndex - ele percorre cada item, e retorna o index do primeiro encontrado com uma certa lógica
// reduce - 

const produtos = [
  {
    nome: 'Carro',
    preco: 1234
  },
  {
    nome: 'Cadeira',
    preco: 12345
  }
]

const subtotal = produtos.reduce((valorAnterior, valorAtual) => {
  return valorAnterior + valorAtual.preco
}, 0)

const products = [
  { name: 'Camisa', price: 100, amount: 5 },
  { name: 'Short', price: 50, amount: 2 }
]

const NFCe = products.reduce((valorAnterior, valorAtual) => {
  return valorAnterior + `Produto: ${valorAtual.name} ${valorAtual.amount * valorAtual.price}\n`
}, '')

// PROTOTYPE CHAIN

// 2 - Objects: são coleções de pares chave-valor, onde cada chave é uma string e o
// valor pode ser de qualquer tipo de dados. Os objetos são usados ​​para representar
// entidades do mundo real, como usuários, produtos e assim por diante.

// CHAVES -> String || Symbol
// VALORES -> TODOS

// Objeto literal: é a forma mais simples e comum de criar um objeto,
// usando chaves {} e separando cada propriedade por vírgulas. Exemplo:

const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

const eu = {
  name: 'Victor',
  estado: 'RJ'
}

// Função construtora: é uma função que pode ser usada para criar um novo objeto
// com o operador new. As propriedades do objeto são definidas na função
// construtora usando a palavra-chave this. Exemplo:

function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}

const personWithConstructor = new Person('John', 30, 'New York');

// Object.create(): é uma função estática do objeto Object que cria um novo
// objeto com um protótipo especificado. Exemplo:

const personProto = {
  greet: function() {
    console.log('Hello');
  }
};

const personWithCreateFunction = Object.create(personProto);
personWithCreateFunction.name = 'John';
personWithCreateFunction.age = 30;
personWithCreateFunction.city = 'New York';

// Classes: é uma forma mais recente e popular de definir objetos em JavaScript.
// As classes são uma sintaxe mais clara e simples para trabalhar com funções construtoras. Exemplo:
class Person {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }
}

const personClasse = new Person('John', 30, 'New York');

// Métodos famosos
{
  name: 'victor'
}
[['name', 'victor']]
// keys - retorna um array, os items sao as chaves do objeto
// values - retorna os valores
