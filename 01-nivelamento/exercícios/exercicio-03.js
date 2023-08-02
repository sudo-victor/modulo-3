// Crie 3 entidades: Funcionário, Gerente e Desenvolvedor

// O Funcionário terá as seguintes informações
// - code, String;
// - nome, String;
// - dataNascimento, String;
// - salario, Number;
// - createdAt, Date;

// O Gerente terá as seguintes informações:
// - code, String;
// - nome, String;
// - dataNascimento, String;
// - salario, Number;
// - departamento, String;
// - createdAt, Date;

// O Desenvolvedor terá as seguintes informações:
// - code, String;
// - nome, String;
// - dataNascimento, String;
// - salario, Number;
// - tecnologia, String;
// - createdAt, Date;

const maria = new Gerente("Maria", '20-05-1995', 8000, "Vendas");
const joao = new Desenvolvedor("João",'20-05-1995', 5000, "JavaScript");

console.log(maria.nome); // "Maria"
console.log(joao.idade); // 25

// Crie um repositório para cada entidade: FuncionarioRepository, GerenteRepository e DesenvolvedorRepository
// Deve ser possível:
// - Criar;
// - Editar;
// - Buscar por código;
// - Deletar.