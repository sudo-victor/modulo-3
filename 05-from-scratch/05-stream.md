# Entendendo Node Stream
Em Node.js, streams são uma forma eficiente de lidar com leitura e escrita de dados em tempo real. Elas permitem que você processe dados de forma incremental, em pequenos pedaços chamados de "chunks", em vez de carregá-los ou escrevê-los na memória inteiramente. As streams são implementadas por meio da classe Stream, que é a classe base para várias implementações de streams no Node.js.

## Estrutura e Tipos de Streams

A estrutura das streams é composta pelos seguintes componentes principais:

### Readable Streams

São usadas para ler dados de uma fonte, como um arquivo ou uma solicitação de rede. Elas implementam o evento data, que é acionado quando novos dados estão disponíveis. Além disso, elas podem emitir o evento end quando todos os dados foram lidos e o evento error em caso de erro.

### Writable Streams (Streams de Escrita)
São usadas para gravar dados em um destino, como um arquivo ou uma resposta de rede. Elas possuem o método write() para escrever os dados e o método end() para indicar o fim da escrita. Elas também podem emitir o evento error em caso de erro.

### Duplex Streams (Streams Duplex)
São streams que possuem tanto recursos de leitura quanto de escrita. Elas podem ler dados de uma fonte e escrever dados em um destino ao mesmo tempo.

### Transform Streams (Streams de Transformação)
São um tipo especial de Duplex Streams que permitem transformar os dados conforme eles são lidos ou escritos. Eles são úteis para realizar manipulações, como compressão, criptografia, conversão de formato, entre outros.

## Onde/Quando utilizamos Node Streams

No Node.js, as streams são amplamente utilizadas em várias áreas para manipulação eficiente de dados em tempo real. Algumas das principais áreas em que as streams são utilizadas incluem:

1. Manipulação de Arquivos: As streams são usadas para ler e gravar arquivos de forma incremental, especialmente em arquivos grandes, onde carregar o arquivo inteiro na memória pode ser inviável. Os módulos `fs` e `fs-extra` do Node.js fornecem suporte para streams de leitura e escrita de arquivos.

2. Comunicação em Rede: As streams são usadas para transmitir dados em comunicações de rede, como servidores HTTP, sockets TCP ou websockets. Os módulos `http`, `net` e `websocket` do Node.js utilizam streams para leitura e escrita de dados em tempo real durante a comunicação.

3. Processamento de Dados: As streams são usadas para processar grandes volumes de dados de forma incremental. Isso é especialmente útil em cenários como análise de log, processamento de grandes conjuntos de dados ou transformação de dados em tempo real. Os módulos `readline` e `csv-parser` são exemplos de módulos do Node.js que utilizam streams para processar dados linha por linha ou por registros em formato CSV.

4. Compressão e Descompressão: As streams são usadas para comprimir e descomprimir dados em formatos como gzip, zlib e deflate. Os módulos `zlib`, `gzip`, `tar` e `archiver` do Node.js suportam operações de compressão e descompressão utilizando streams.

5. Criptografia: As streams são usadas para criptografar e descriptografar dados em tempo real. Os módulos `crypto` e `tls` do Node.js utilizam streams para operações criptográficas, como criptografia simétrica e assimétrica, além de estabelecer conexões seguras em SSL/TLS.

Esses são apenas alguns exemplos das áreas em que as streams são amplamente utilizadas no Node.js. Elas proporcionam uma forma eficiente e flexível de manipular e processar dados em tempo real, evitando a necessidade de carregar grandes volumes de dados na memória de uma só vez.

## Exemplos

Aqui estão alguns exemplos de uso de streams no Node.js:

### Leitura de arquivo usando uma Readable Stream

```javascript
const fs = require('fs');

const readableStream = fs.createReadStream('arquivo.txt', 'utf8');

readableStream.on('data', (chunk) => {
  console.log(chunk);
});

readableStream.on('end', () => {
  console.log('Leitura concluída.');
});

readableStream.on('error', (err) => {
  console.error(err);
});
```

Nesse exemplo, uma Readable Stream é criada usando o método createReadStream() do módulo fs. Os dados são lidos em chunks e cada chunk é exibido no console. Quando a leitura é concluída, o evento end é acionado.

### Escrita em arquivo usando uma Writable Stream
```javascript
const fs = require('fs');

const writableStream = fs.createWriteStream('output.txt', 'utf8');

writableStream.write('Olá,');
writableStream.write(' mundo!');
writableStream.end();

writableStream.on('finish', () => {
  console.log('Escrita concluída.');
});

writableStream.on('error', (err) => {
  console.error(err);
});
```

Nesse exemplo, uma Writable Stream é criada usando o método createWriteStream() do módulo fs. Os dados são escritos usando o método write() e, em seguida, o método end() é chamado para indicar o fim da escrita. Quando a escrita é concluída, o evento finish é acionado.

Esses são apenas exemplos básicos de uso de streams no Node.js. As streams são muito flexíveis e podem ser usadas em uma varied