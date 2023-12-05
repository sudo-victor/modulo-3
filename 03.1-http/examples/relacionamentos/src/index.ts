import { initializeDb } from "./database";
import { Curriculum } from "./entities/curriculum";
import { User } from "./entities/user";

initializeDb()

interface IUser {
  name: String;
  phone: String;
  address: String;
}

interface ICurriculum {
  educations: String;
  certifications: String;
  skills: String;
  description: String;
}

async function createUser(user: IUser) {
  const userCreated = await User.create(user)
  return userCreated
}

async function createCurriculum(userId: string, curriculum: ICurriculum) {
  const curriculumCreated = await Curriculum.create(curriculum)
  await User.findByIdAndUpdate(userId, { curriculum: curriculumCreated.id })
}

async function listUsers() {
  const users = await User.find().populate("curriculum")
  return users
}

// async function run() {
//   const userCreated = await createUser({
//     name: "Marco",
//     phone: "219999999999",
//     address: "Goias"
//   })
//   await createCurriculum(userCreated.id, {
//     educations: "Arnia",
//     certifications: "Arnia",
//     skills: "Rubyzin de cria",
//     description: "Garoto de programa"
//   })

//   console.log("finalizou")
// }

// run()

async function run() {
  const users = await listUsers()
  console.log(users)
}

run()