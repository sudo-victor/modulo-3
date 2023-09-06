export default function createUser(data, database) {
  const userAlreadyExists = database.find(item => item.email === data.email)
  if (userAlreadyExists) {
    return "Error"
  } 

  database.push({ id: Date.now(), ...data })
  return database
}

