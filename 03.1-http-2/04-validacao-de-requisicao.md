# Como validar a requisicao com YUP

Para validar precisamos declarar como vai ser o objeto, e para isso criamos um schema

## Criando um schema

```javascript
const yup = require('yup');


const schema = yup.object().shape({
  name: yup.string().min(2).required(),
  email: yup.string().email('E-mail inválido').required('Campo obrigatório),
  score: yup.number().required()
})

```

Note que é possível colocar uma mensagem de erro personalizada, se caso deseje.
Para ver as outras tipagems: https://www.npmjs.com/package/yup

## Validacao

Após a criacao do schema, conseguimos passar um objeto como parâmetro e validar de acordo com o schema declarado


```javascript
const yup = require('yup');


const schema = yup.object().shape({
  name: yup.string().min(2).required(),
  email: yup.string().email('E-mail inválido').required('Campo obrigatório),
  score: yup.number().required()
})

app.post('/test', (req, res) => {
  try {
    await schema.validate(req.body)
    return res.status(200).send()
  } catch (error) {
    return res.status(400).json({ errorList: error.errors})
  }
})

```
