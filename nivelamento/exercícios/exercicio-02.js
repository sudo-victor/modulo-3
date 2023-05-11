const repository = []

// crie uma função factory que gera um Student
// Parametros: name, class, status, document
// Retorno {
//   code: 'uuid',
//   name: ''Victor,
//   class: '401B',
//   status: 'matriculado' || 'pendente,
//   document: '123.123.123-00',
//   createdAt: '2015-04-12' tipo Date
// }
function makeStudent(data) {}

// Crie as funçao para manipular a constante repository
// Deve ser possível:
// - Criar;
// - Editar por código;
// - Buscar por código;
// - Buscar por Turma;
// - Deletar.

function createStudentRepository(data) {}
function updateStudentRepository(code, data) {}
function findStudentByCodeRepository(code) {}
function findStudentByClassRepository(className) {}
function deleteStudentByCode(code) {}
