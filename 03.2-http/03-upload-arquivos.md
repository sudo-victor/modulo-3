# Uploda de Arquivos
link: https://www.npmjs.com/package/multer

## Antes de Comecar

`multipart/form-data` é um tipo de codificação de dados usado em formulários HTML para enviar arquivos e outros tipos de dados binários através de uma solicitação HTTP. É amplamente utilizado quando você precisa fazer upload de arquivos de um cliente para um servidor.

Ao usar o `multipart/form-data`, os dados são divididos em várias partes, cada uma com seu próprio cabeçalho, e são enviados como parte do corpo da solicitação HTTP. Essa codificação permite que os arquivos sejam enviados em seu formato binário original, preservando sua integridade.

Por outro lado, o JSON (JavaScript Object Notation) é um formato de dados leve e fácil de ler e escrever, amplamente utilizado para troca de dados entre um cliente e um servidor. Ele é baseado na sintaxe JavaScript e permite representar estruturas de dados complexas usando pares de chave-valor.

A principal diferença entre `multipart/form-data` e JSON é a maneira como os dados são estruturados e enviados. O `multipart/form-data` é usado especificamente para envio de arquivos e permite a inclusão de dados binários, enquanto o JSON é usado principalmente para envio de dados estruturados em formato de texto, como objetos JavaScript.

Em resumo, o `multipart/form-data` é usado para enviar arquivos e outros dados binários, enquanto o JSON é usado para enviar e receber dados estruturados em formato de texto. A escolha entre os dois depende das necessidades do seu aplicativo ou serviço.

## Instalacao

Primeiro, instale as dependências necessárias executando o seguinte comando no terminal:

```shell
npm install multer
```

## Configuracao

Configure o Multer para lidar com o upload de arquivos. Defina o destino onde os arquivos serão armazenados e o nome do arquivo. Você pode personalizar essas configurações de acordo com suas necessidades. Por exemplo:

```javascript
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  }
});

const upload = multer({ storage: storage });
```

## Adicionando na rota

Crie a rota que receberá o upload do arquivo. Use o middleware upload.single() para lidar com o upload de um único arquivo. No exemplo abaixo, a rota /upload é usada:

```javascript
app.post('/upload', upload.single('file'), (req, res) => {
  // A partir deste ponto, o arquivo está disponível em req.file
  // Faça o que for necessário com o arquivo, como salvá-lo no banco de dados ou processá-lo
  // Depois, você pode enviar uma resposta ao cliente, como um JSON com uma mensagem de sucesso
  res.json({ message: 'Arquivo enviado com sucesso!' });
});
```

## Configurar imagens estaticas

```javascript
app.use(express.static(path.join(__dirname, "..", 'uploads')))
```

Para disponibilizar imagens usando o Express e o middleware `express.static`, você pode seguir os seguintes passos:

1. Crie uma pasta no seu projeto onde as imagens serão armazenadas. Por exemplo, você pode criar uma pasta chamada "images" no diretório raiz do seu projeto.

2. Mova as imagens para a pasta "images" que você criou. Certifique-se de que as imagens estejam no formato correto (por exemplo, .jpg, .png, etc.) e estejam na localização correta dentro da pasta.

3. No seu arquivo JavaScript do Express, adicione o seguinte código para servir as imagens estáticas:
```javascript
const express = require('express');
const app = express();

app.use(express.static('images'));
```
Certifique-se de substituir `'images'` pelo caminho relativo à pasta que contém suas imagens.

4. Agora, você pode acessar as imagens diretamente no navegador usando a rota definida pelo `express.static`. Por exemplo, se você tiver uma imagem chamada "example.jpg" na pasta "images", poderá acessá-la no navegador usando a URL `http://seuendereco.com/example.jpg`.

Observe que o `express.static` servirá qualquer arquivo estático na pasta especificada. Portanto, certifique-se de ter um controle adequado sobre quais arquivos são disponibilizados publicamente e quais não são.

Com esses passos, você será capaz de disponibilizar imagens estáticas usando o Express e o middleware `express.static`. Isso permite que os navegadores acessem diretamente as imagens através de URLs específicas.
