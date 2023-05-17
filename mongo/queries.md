# Some queries

## And

Se mais de um nome de campo for especificado, então é uma consulta "AND".
```
{
  key1: "value1",
  name2: "value2"
}
```

## Or

O operador de consulta aceita um array que inclui um conjunto de objetos de consulta, e pelo menos um desses objetos deve corresponder a um documento antes que ele seja recuperado.

```
{
  $or:[
    {author:"Daniel"},
    {author:"Jessica"}
  ]
}
```

## GTE (Greatest than or equal)
```
{"fieldname":{$gte:100}}
```

## LTE (Less than or equal)
```
{"fieldname":{$lte:100}}
```