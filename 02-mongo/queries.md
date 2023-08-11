# Some queries

and, or, gte, lte e like


harry
Harry Potter Pedra filosofal
Harry Potter e a Camara secreta


collection.find({
  title: { $regex: 'Harry', $options: 'i' }
})

## And
Se mais de um nome de campo for especificado, então é uma consulta "AND".
```
{
  name: "Victor",
  email: "victor@email.com"
}
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
```

## GTE (Greater than or equal) && GT (Greater than)
```
{ "fieldname": {$gte:100} }
```

## LTE (Less than or equal) && LT (Less than)
```
{"fieldname":{$lte:100}}
```

## LIKE
```
{ $regex: '^João', $options: 'i' } 
```
