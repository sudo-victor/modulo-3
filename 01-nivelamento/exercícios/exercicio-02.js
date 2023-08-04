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
  return {
    code: ++studentCount,
    name: data.name,
    class: data.class,
    status: data.status,
    document: data.document,
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

let repository = []

function createStudentRepository(data, database) {
  const studentAlreadyExists = repository.find((student) => student.document === data.document)
  if (studentAlreadyExists) {
    return 'Student already exists.'
  }

  const student = makeStudent(data)

  database.push(student)

  return student
}

function updateStudentRepository(code, data) {
  const student = repository.find((student) => student.code === code)

  if (!student) {
    return 'Student not found'
  }

  Object.assign(student, data)

  return student
}

function findStudentByCodeRepository(code) {
  return repository.find((student) => student.code === code)
}

function findStudentByClassRepository(className) {
  return repository.filter((student) => student.class = className)
}

function deleteStudentByCode(code) {
  // const index = repository.findIndex((student) => student.code === code)
  // if (index < 0) {
  //   return 'Student not found'
  // }

  // repository.splice(index, 1)

  // return repository
  repository = repository.filter((student) => student.code !== code)
  return repository
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
  document: '123.123.122-00',
  status: 'matriculado'
})

updateStudentRepository(2, {
  name: 'Fulano',
  class: 'Turma 3',
  status: 'matriculado'
})

deleteStudentByCode(2)

console.log(repository)