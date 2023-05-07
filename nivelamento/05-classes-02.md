A Programação Orientada a Objetos (POO) é um paradigma de programação que tem
como base a ideia de que tudo em um programa pode ser representado como um objeto,
com suas propriedades e métodos. No JavaScript, a POO pode ser implementada usando classes e objetos.

Uma classe é uma estrutura que define um conjunto de propriedades e métodos que
serão compartilhados por todos os objetos criados a partir dela. Por exemplo,
se estivermos criando um programa para gerenciar carros, podemos definir uma
classe `Carro` que contém as propriedades comuns a todos os carros (como marca, modelo e ano)
e os métodos que todos os carros podem executar (como acelerar e frear).

Para criar um objeto a partir de uma classe no JavaScript, usamos a palavra-chave
`new` seguida do nome da classe e seus argumentos (se houver). Por exemplo:

```javascript
class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  acelerar() {
    console.log(`O ${this.modelo} está acelerando...`);
  }

  frear() {
    console.log(`O ${this.modelo} está freando...`);
  }
}

const meuCarro = new Carro("Fiat", "Uno", 2010);
```

```javascript
console.log(meuCarro.marca); // imprime "Fiat"
meuCarro.acelerar(); // imprime "O Uno está acelerando..."
```

Além disso, a POO no JavaScript também permite a herança, que é a capacidade de
uma classe derivar suas propriedades e métodos de uma classe pai. Isso é feito
usando a palavra-chave `extends`. Por exemplo:

```javascript
class CarroEsportivo extends Carro {
  constructor(marca, modelo, ano, potencia) {
    super(marca, modelo, ano);
    this.potencia = potencia;
  }

  turbo() {
    console.log(`O ${this.modelo} está usando o turbo com potência de ${this.potencia} cavalos.`);
  }
}

const meuCarroEsportivo = new CarroEsportivo("Chevrolet", "Camaro", 2020, 300);
meuCarroEsportivo.turbo(); // imprime "O Camaro está usando o turbo com potência de 300 cavalos."
```

No exemplo acima, criamos uma nova classe `CarroEsportivo` que herda todas as propriedades
e métodos da classe `Carro`, mas também adiciona uma nova propriedade `potencia` e um novo
método `turbo`. Para acessar o construtor da classe pai, usamos a palavra-chave `super`.
Finalmente, criamos um objeto `meuCarroEsportivo` a partir da classe `CarroEsportivo` e chamamos seu método `turbo`.