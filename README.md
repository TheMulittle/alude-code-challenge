[![Coverage Status](https://coveralls.io/repos/github/mgkramar/Alude-Stack/badge.svg?t=eSlUAb)](https://coveralls.io/github/mgkramar/Alude-Stack)

# Desafio de Engenharia Alude - Murilo Gabardo Kramar

Desenvolva uma pilha (estrutura de dados) de floats onde as operações de adicionar um item,
remover do topo, consultar o item do topo e consultar o item de menor valor sejam O(1) em
tempo. Não há limitação de espaço em memória - mas otimizações em memória dão pontos
extras.

## Rodando o projeto

Esse projeto foi desenvolvido em Node.js. A fim de rodar o projeto é necessario possuir Node.js 12.x+ instalado. Você pode obtê-lo aqui: https://nodejs.org/en/download/

Após instalação do Node (e do gerenciados de pacotes NPM), será preciso instalar as dependências definidas no package.json. Para isso, basta rodar o comando abaixo em algum terminal de preferência dentro da pasta raíz do projeto (assumindo que npm está configurado nas variáveis de ambiente):

```
$ npm run install
```

Existem três meios principais de interagir com o projeto. O primeiro é o comando abaixo resposável por rodar a suite de testes com *Jest* e apresentar o relatorio de cobertura de testes. Ao final da execução, o relatório de testes pode ser obtido no seguinte caminho: *\${diretorio_do_projeto}/coverage/lcov-report/index.html*. O badge acima 'covereage' reflete essa informação

```
$ npm run test
```

Também é possível rodar um aplicativo teste a fim de empiricamente medir o tempo de execução de algumas operações. Para tal é só executar o comando abaixo

```
$ npm run start
```

Também é possível rodar um benchmark utilizando ferramentas externas. Para isso, execute o seguinte comando

```
$ npm run benchmark
```

O programa de forma nehuma prova que o custo das operações é independente da quantidade de dados armazenado na estrutura, porém ele ajuda a ter um entendimento empirico do fato.

Consideremos a seguinte hipótese: dado a estrutura de dados Pilha e uma determinada operacão, se complexidade dessa operação for diferente de O(1), então espera-se que o tempo médio para realizar a operação seja muito maior em uma Pilha que cresce de X a 2*X elementos do que em uma Pilha que cresce de 0 a X elementos. O programa ajuda a mostrar que o tempo médio para realizar a operação não é consideravelmente maior para X a 2*X do que de 0 a X elementos

## Explicando a solução

A solução em questão procurou favorecer o desacoplamento de código, portanto tem quatro classes que compõem a solução:

- Element -> é um nó que guarda um item e também guardar relações com próximo nó e com o item nó anterior. Um nome melhor seria Node, mas o nome do arquivo seria Node.js e talvez pudesse ser confuso por causa da plataforma que estamos utilizando.

- DoubleLinkedList -> uma lista duplamente encadeada que fornece operações de adição e remoção do final da estrutura

- Stack -> uma pilha genérica que servirá de base para a nossa pilha mais especifica. Ela é composta pela DoubleLinkedList o que permite que as suas operações sejam implementadas com pouco código uma vez que a DoubleLinkedList fornece operações de adição e remoção do final da estrutura

- AludeStack -> a pilha especifica do desafio. Ela é composta por duas pilhas: uma pilha para guardar todos os valores e outra para fazer controle dos valores minimos e garantir que a operação de consulta do valor mínimo seja O(1). Por ser composta por duas pilhas mais memória é consumida, porém se o critério de escolha é legilibilade em detrimento de performance, então essa solução se faz viável

## Solução alternativa visando performance

Caso necessitassemos de maior performance e economia de memória, poderiamos desenvolver uma solução menos desacoplada e que fosse mais específica para o domínio do problema. Isso seria válido, por exemplo, se estivessemos limitação de hardware (como um microcontrolador) ou ainda estivessemos trabalhanado com uma massiva quantidade de dados

Uma das possíveis soluções visando performance é eliminar as estruturas de dados intermediárias Stack e DoubleLinkedList. Desse modo AludeStack seria composta por Element. Element também nao precisaria ser composto por um nextElement e um previousElement uma vez que para o correto funcionamento da Stack é necessário apenas ter acesso ao primeiro elemento da estrutura (o topo) e esse elemento ter referência do elemento abaixo dele e assim por diante

Para garantir que a consulta do menor valor seja O(1) necessitariamos adicionar a Element a referencia para um elemento de nome **nextMinValue** que resolveria o problema da seguinte maneira:

- A **AludeStack** tem uma variável denominado **minElement** responsável por referenciar o **Element** que guarda o menor valor. Toda operacao push da **AludeStack** verificaria se o valor a ser adicionado é menor ou igual ao valor guardado em **minElement**. Se for, a AludeStack salva a referencia do atual **minElement** como **nextMinValue** do **Element** a ser adicionado ao topo, adiciona o novo **Element** ao topo e salva o novo **Element** também em **minElement**. Dessa forma a **AludeStack** tem acesso imediato ao menor valor presente em si. Quando o item é removido do topo da **AludeStack**, a **AludeStack** verifica se o Element a ser removido é o atual **minElement**, se for, ela salva a referência **nextMinElement** do Element a ser removido em **minElement**.
