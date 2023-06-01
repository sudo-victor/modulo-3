# Entendendo call stack/event loop/callback queue
A call stack, o event loop e a callback queue são componentes essenciais do modelo de execução assíncrona do JavaScript e do Node.js. Vamos entender cada um deles:

## Call Stack (Pilha de Chamadas)

A call stack é uma estrutura de dados que mantém o rastreamento das chamadas de função em execução no programa. Ela opera no princípio LIFO (Last In, First Out), o que significa que a última função chamada é a primeira a ser concluída. Sempre que uma função é chamada, ela é adicionada ao topo da pilha, e quando uma função é concluída, ela é removida da pilha.

## Event Loop (Laço de Eventos)
O event loop é responsável por verificar se há tarefas assíncronas na callback queue (fila de callbacks) e adicioná-las à call stack quando esta estiver vazia. Ele executa em um loop contínuo, monitorando a pilha de chamadas e a fila de callbacks. Se a pilha estiver vazia, o event loop verifica se há callbacks na fila e as envia para a pilha de chamadas, permitindo que sejam executadas.

## Callback Queue (Fila de Callbacks)
A callback queue é uma fila que armazena as callbacks (funções de retorno) de tarefas assíncronas concluídas. Quando uma tarefa assíncrona é finalizada, sua callback correspondente é colocada na fila. A callback queue espera até que o event loop verifique se a pilha de chamadas está vazia para então adicionar as callbacks à pilha, para que sejam executadas.

O fluxo básico de execução assíncrona é o seguinte:

1 - Quando uma função assíncrona é chamada, ela é adicionada à call stack.
2 - Se a função assíncrona possui tarefas assíncronas, como acesso ao sistema de arquivos ou chamadas de rede, elas são delegadas a componentes assíncronos do Node.js.
3 - Enquanto essas tarefas assíncronas são processadas fora da call stack, o JavaScript continua executando as próximas linhas de código que não dependem dessas tarefas.
4 - Quando as tarefas assíncronas são concluídas, suas callbacks são adicionadas à callback queue.
5 - O event loop verifica se a call stack está vazia. Se estiver, ele retira as callbacks da callback queue e as adiciona à call stack para serem executadas.

Essa interação entre a call stack, o event loop e a callback queue permite que o JavaScript e o Node.js executem operações assíncronas de forma eficiente, evitando bloqueios e permitindo que o código continue a ser executado enquanto as tarefas assíncronas são processadas em segundo plano.


Veja na prática: https://latentflip.com/loupe