# O que é NodeJS?
O Node.js é um ambiente de execução de código aberto que permite que o JavaScript seja executado fora do navegador, no lado do servidor. Ele utiliza o motor JavaScript V8 do Google Chrome para executar o código JavaScript de forma eficiente e escalável.

Ao contrário do JavaScript tradicional, que é usado principalmente para criar interações e funcionalidades em navegadores da web, o Node.js permite que o JavaScript seja utilizado para criar aplicativos de servidor completos. Ele fornece uma ampla gama de recursos e bibliotecas que simplificam o desenvolvimento de aplicativos de rede, como servidores web, APIs, sistemas de streaming, aplicativos em tempo real e muito mais.

## Pincipais caracteristicas

- Orientado a eventos
- Non-blocking I/O(Entrada e saída não bloqueada)

Uma das principais características do Node.js é a sua natureza orientada a eventos e não bloqueante. Isso significa que, em vez de seguir um modelo de programação tradicional baseado em threads, o Node.js usa um único thread de execução para lidar com várias conexões simultâneas. Ele usa um loop de eventos para processar tarefas de forma assíncrona, o que resulta em uma alta capacidade de resposta e escalabilidade.

## Gerenciador de pacotes

O Node.js é amplamente conhecido por seu ecossistema de pacotes gerenciado pelo npm (Node Package Manager), que é um dos maiores repositórios de pacotes de software do mundo. Isso significa que os desenvolvedores têm acesso a uma enorme quantidade de bibliotecas e frameworks prontos para uso, o que acelera o processo de desenvolvimento e facilita a construção de aplicativos complexos.

Em resumo, o Node.js é uma plataforma que permite que o JavaScript seja executado no servidor, proporcionando aos desenvolvedores a capacidade de criar aplicativos de servidor rápidos, escaláveis e eficientes. Ele é amplamente adotado pela comunidade de desenvolvedores e é usado em uma variedade de aplicações, desde startups até grandes empresas.

## Como o nodejs funciona?
Modelo de Eventos: O Node.js utiliza um loop de eventos para gerenciar as operações assíncronas. Ele registra callbacks (funções de retorno) para eventos específicos e, quando esses eventos ocorrem, os callbacks são acionados. Isso permite que o Node.js processe várias solicitações e eventos de forma assíncrona, sem bloquear o fluxo principal do programa.

Thread Única: O Node.js é executado em uma única thread, ao contrário de outros modelos tradicionais que usam threads múltiplas. Essa thread única é responsável por lidar com todas as solicitações de entrada/saída (I/O) e executar os eventos. Isso significa que o Node.js não desperdiça recursos com a criação e troca de threads, o que o torna eficiente em termos de uso de memória e processamento.

Operações I/O Assíncronas: O Node.js é projetado para trabalhar de forma assíncrona em operações de entrada/saída, como acesso ao sistema de arquivos, chamadas de rede e acesso a bancos de dados. Em vez de aguardar o término de uma operação I/O antes de prosseguir para a próxima, o Node.js registra um callback para ser executado quando a operação for concluída. Enquanto isso, ele continua a executar outras tarefas, maximizando a utilização da thread única.

NPM (Node Package Manager): O Node.js possui um gerenciador de pacotes chamado npm, que é um dos maiores repositórios de pacotes de software do mundo. O npm permite que os desenvolvedores instalem, compartilhem e gerenciem as dependências de seus projetos de forma fácil e eficiente. Isso torna o desenvolvimento de aplicativos com o Node.js rápido e conveniente, pois é possível aproveitar as bibliotecas e frameworks disponíveis no ecossistema do npm.

Construção de Servidores Web: Com o Node.js, é possível criar servidores web completos usando JavaScript. O Node.js fornece um conjunto de módulos internos, como o módulo HTTP, que facilitam a criação de servidores web personalizados. Além disso, existem frameworks populares, como o Express.js, que simplificam ainda mais o processo de construção de aplicativos web robustos e escaláveis.

## Entendendo  call stack/event loop/callback queue 

