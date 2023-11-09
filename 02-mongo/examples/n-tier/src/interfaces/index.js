const Service = require('../services/taskService')


const taskService = new Service()
taskService.create("Torcer contra o botafogo hj", "blabla", 'Alta')
taskService.create("Torcer contra o botafogo hj2", "blabla", 'Alta')

console.log(taskService.findAll())

