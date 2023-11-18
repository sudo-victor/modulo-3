# Some queries

and, or, gte, lte e like


find({
  name: "Paola"
})
findOne()

## And
Se mais de um nome de campo for especificado, então é uma consulta "AND".
```
{
  name: "Victor",
  email: "victor@email.com"
}
users.find({
  name: "Victor",
  email: "victor@email.com",
})
```


## Or
O operador de consulta aceita um array que inclui um conjunto de objetos de consulta, e pelo menos um desses objetos deve corresponder a um documento antes que ele seja recuperado.
```
{
  $or:[
    { author: "Ivan", name: "" },
    { price: 100 }
  ]
}

roupas.find({
  $or: [
    { cor: "preta", tamanho: "G", tipo: "CAMISA", },
    { cor: "branca", tamanho: "G", tipo: "CAMISA",  },
    { tamanho: "42", tipo: "CALCA", },
    { tamanho: "46", tipo: "CALCA", },
  ],
})
```

## GTE (Greater than or equal) && GT (Greater than)
```
{ "fieldname": {$gte:100} }

roupas.find({
  preco: { $gt: 100 }
})
```

## LTE (Less than or equal) && LT (Less than)
```
{"fieldname":{$lte:100}}
```

## LIKE
```
find({
  name: { $regex: 'Ma', $options: 'i' } 
})
```
$options: 'i' -> case insensitive
