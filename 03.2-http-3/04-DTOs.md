# DTO 

DTO significa "Data Transfer Object" (Objeto de Transferência de Dados, em português). É um padrão de projeto utilizado no desenvolvimento de software para transferir dados entre camadas ou componentes de um sistema.

O objetivo principal de um DTO é encapsular os dados e transportá-los de forma eficiente entre diferentes partes de um sistema, como a camada de apresentação (front-end) e a camada de acesso a dados (back-end). Ele permite agrupar várias informações relacionadas em um único objeto, facilitando a manipulação e o transporte desses dados.

Um DTO geralmente contém apenas os campos e propriedades necessários para a transferência de dados, omitindo qualquer lógica ou comportamento específico do domínio. Isso o diferencia de outras estruturas de dados, como as entidades de negócio ou objetos de domínio, que podem conter métodos e comportamentos adicionais.

O uso de DTOs traz algumas vantagens, como:

1. Redução de dados desnecessários: Ao enviar apenas os dados necessários, é possível reduzir a quantidade de informações trafegadas pela rede, melhorando o desempenho do sistema.

2. Desacoplamento: O DTO permite que as diferentes camadas do sistema não dependam diretamente das estruturas internas umas das outras, possibilitando mudanças independentes em cada camada.

3. Flexibilidade: Com o DTO, é possível agrupar dados de diferentes fontes em um único objeto, facilitando a manipulação e a transferência de informações complexas.

4. Segurança: Ao enviar apenas os dados necessários, é possível evitar a exposição de informações sensíveis que não devem ser acessíveis externamente.

Em resumo, um DTO é uma estrutura de dados usada para transportar informações entre diferentes partes de um sistema, visando eficiência, desacoplamento e segurança.

```javascript
interface UserDTO {
  id: number;
  name: string;
  email: string;
  age?: number; // Opcional
}

function createUser(userDto: UserDTO): void {
  // Lógica para criar o usuário no banco de dados
  // Exemplo: userDb.create(userDto);
  console.log('Novo usuário criado:', userDto);
}

// Exemplo de uso
const newUser: UserDTO = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
  age: 30
};

createUser(newUser);
```
