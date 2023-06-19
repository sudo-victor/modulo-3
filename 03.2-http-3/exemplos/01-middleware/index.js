const express = require('express');
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const app = express();
// Bearer token
const users = []

const logMiddleware = (req,res,next) => {
  console.log(req.url)
  next()
}

const authMiddleware = (req,res,next) => {
  const { headers } = req


  const auth = headers?.authorization
  if (!auth) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  const [,token] = auth.split(' ')

  const user = JWT.decode(token)

  req.user = user

  next()
}

app.use(express.json())
app.use(logMiddleware)

app.post('/users', (req, res) => {
  const { body } = req;

  users.push({
    ...body,
    password: bcrypt.hashSync(body.password, 8)
  })

  console.log(users, body)

  return res.json({ users })
})

app.post('/auth', (req, res) => {
  const { body } = req;

  // verifcar se existe o email no db
  const userExists = users.find(user => user.email === body.email)
  if(!userExists) {
    return res.status(404).json({ message: 'Email/password invalid'})
  }
  
  // comparar as senhas
  const passwordIsValid = bcrypt.compareSync(body.password, userExists.password)
  if(!passwordIsValid) {
    return res.status(404).json({ message: 'Email/password invalid'})
  }

  const payload = userExists
  const secretKey = "kajsdlkajd"
  const options = {}
  const token = JWT.sign(payload, secretKey, options)

  return res.status(200).json({ token })
})

app.get('/profiles', authMiddleware, (req, res) => {
  console.log('GET /profiles', req.user)
  res.send('Welcome')
})

app.listen(3333, () => {
  console.log('listening on port 3333');
})
