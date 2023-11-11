const UserService = require("../services/UserService")

const service = new UserService()

service.create("victor")
service.create("victor 1 ")
service.create("victor 2 12")
service.create("victor123123")

console.log(service.findAll())
