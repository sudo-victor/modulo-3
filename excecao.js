const users = []

function createUserService(name) {
  if (!name) {
    throw  "Name is missing"
  }
  createUserRepository()

}

function createUserRepository() {
  throw
  users.push(name)
}

// try/catch
try {
  createUser("Jaqui")
} catch(obj) {
  console.log("DEU RUIM: ", obj)
} finally {
  console.log("FINALIZOU")
}