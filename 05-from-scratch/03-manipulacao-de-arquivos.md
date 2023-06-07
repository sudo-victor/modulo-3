# Pacote FS
O módulo "fs" (file system) do Node.js é um módulo interno que fornece funcionalidades para manipular arquivos e diretórios no sistema de arquivos do computador. Ele permite que você realize operações como leitura, escrita, renomeação, exclusão, criação de diretórios, entre outras, de forma assíncrona ou síncrona.

Aqui estão alguns exemplos de usabilidade do módulo "fs":

## Leitura de arquivos

```javascript
const fs = require('fs');

fs.readFile('arquivo.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
```

Nesse exemplo, o arquivo "arquivo.txt" é lido de forma assíncrona. Quando a leitura é concluída, a função de callback é chamada e exibe os dados lidos.

## Escrita de arquivo

```javascript
const fs = require('fs');

const conteudo = 'Conteúdo a ser gravado no arquivo';

fs.writeFile('arquivo.txt', conteudo, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Arquivo gravado com sucesso!');
});
```

Nesse exemplo, o conteúdo é gravado de forma assíncrona no arquivo "arquivo.txt". Quando a escrita é concluída (ou ocorre algum erro), a função de callback é chamada.

## Listagem de diretório

```javascript
const fs = require('fs');

fs.readdir('caminho/do/diretorio', (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(files);
});
```

Nesse exemplo, o método "readdir" é usado para listar os arquivos e diretórios em um determinado diretório.

## Verificação de existência de arquivo ou diretório

```javascript
const fs = require('fs');

fs.exists('arquivo.txt', (exists) => {
  if (exists) {
    console.log('O arquivo existe!');
  } else {
    console.log('O arquivo não existe!');
  }
});
```

Nesse exemplo, o método "exists" é usado para verificar se um arquivo ou diretório existe.

Esses são apenas alguns exemplos de uso do módulo "fs". Ele oferece uma ampla variedade de funcionalidades para manipulação de arquivos e diretórios, permitindo que você desenvolva aplicativos que interajam com o sistema de arquivos de forma eficiente e flexível.

