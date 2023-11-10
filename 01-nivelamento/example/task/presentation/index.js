const UserService = require("../services/userService")

const service = new UserService()

service.create("Victor", "victor@email.com")
service.create("Victor", "victor@email.com")
service.create("Victor", "victor@email.com")
service.create("Victor", "victor@email.com")
service.create("Victor", "victor@email.com")
service.create("Victor", "victor@email.com")
service.create("Victor", "victor@email.com")

console.log(service.findAll())