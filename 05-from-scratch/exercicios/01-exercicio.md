# Seed

Crie um arquivo csv:
```csv
nome,tipo,nível
Pikachu,Elétrico,25
Bulbasaur,Grama/Veneno,18
Charizard,Fogo/Voador,42
Squirtle,Água,12
Jigglypuff,Normal/Fada,15
Mewtwo,Psíquico,70
Gengar,Fantasma/Veneno,38
Machamp,Lutador,45
Dragonite,Dragão/Voador,55
Snorlax,Normal,30
```

Crie um script javascript, para ler este arquivo criado acima e persistir no banco de dados

## Model
Pokemon {
  name: string;
  kind: string;
  level: number;
}
