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

let studentCount = 0

function makeStudent(data) {
  studentCount++
  return {
    code: studentCount,
    name: data.name,
    class: data.class,
    status: data.status,
    document: data.status,
    createdAt: new Date()
  }
}

// Crie as funçao para manipular a constante repository
// Deve ser possível:
// - Criar;
// - Editar por código;
// - Buscar por código;
// - Buscar por Turma;
// - Deletar.

const repository = []

function createStudentRepository(data) {
  const students = makeStudent(data)
  repository.push(students)
  return students
}

function updateStudentRepository(code, data) {
  // buscar o estudante no BD pelo código
  const student = repository.find((s) => s.code === code)
  // atualizar
  Object.assign(student, {
    name: data.name,
    class: data.class,
    status: data.status,
    document: data.document,
  })

  return student
}

function findStudentByCodeRepository(code) {
  return repository.find((s) => s.code === code)
}

function findStudentByClassRepository(className) {
  return repository.filter((s) => s.class === className)
}

function deleteStudentByCode(code) {
  const studentIndex = repository.findIndex((s) => s.code === code)
  repository.splice(studentIndex, 1)
}

createStudentRepository({
  name: 'Jubileu',
  class: 'Turma 3',
  document: '123.123.123-00',
  status: 'matriculado'
})

createStudentRepository({
  name: 'Ciclano',
  class: 'Turma 3',
  document: '123.123.123-00',
  status: 'matriculado'
})

updateStudentRepository(2, {
  name: 'Fulano',
  class: 'Turma 3',
  document: '123.123.123-00',
  status: 'matriculado'
})

// deleteStudentByCode(2)

// console.log(findStudentByCodeRepository(jubileu.code))
console.log(findStudentByClassRepository('Turma 3'))
