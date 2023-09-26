S -> Single Responsability
O -> Open/Close
L -> Liskov Principle
I -> Interface Segregation
D -> Dependency Invertion

Dependency Injection

class MongooseDatabase {}

interface Database {
  create() {}
  findAll() {}
}

class User {

  constructor(private database: MongooseDatabase) {}

  create() {
    this.database.create()
  }
}

const transaction = {
  status: 'canceled' | 'withdraw ' | 'deposit'
}

if (transaction.status === "canceled") {}
if (transaction.status === "withdraw") {}
if (transaction.status === "deposit") {} 

const data = [ j
  {
    type: "session",
    content: "asdasdasd"
  },
  {
    type: "anexo",
    content: "asdasdasd"
  }
]

const componentMapper = {
  "anexo": () => <Anexo />,
  "Fatos Relevantes": () => <Relevantes />,
  "session": () => <Session />,
}

return `
  {data.map(item => componentMapper[item.type]}
`

actions[transaction.status]()
