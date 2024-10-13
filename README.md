# virtual-aquarium

Um aquário virtual divertido e funcional feito em Vue.js.

Link do projeto funcionando: <https://virtual-aquarium.vercel.app>

## Como funciona?

- Você escolhe um tipo de peixe
- Define um nome para ele (ou não)
- Adiciona ao aquário

O peixe adicionado então irá nadar aleatoriamente pelo aquário, e com isso sua fome irá aumentando.

- A fome vai de 0 a 100 em 10 segundos
- A partir dos 75% de fome, aparece a mensagem "Comida!", que significa que o peixe deve ser alimentado
- Caso não seja alimentado até dar os 10 segundos, ele morre :(

## Tecnologias utilizadas

- Vue.js como framework javascript para fazer todo o projeto
- TailwindCSS para estilização de forma geral
- Animações em CSS e JS para a movimentação dos peixes

## Desafios enfrentados

### Gerenciamento de estados dos peixes

O primeiro desafio foi sobre como cada peixe adicionado seria salvo, podendo ser acessados de qualquer componente do projeto. Utilizei o `reactive()` do Vue.js para armazenar os peixes adicionados em um estado, assim como as funções de incrementar a fome e de alimentar, que funcionaram perfeitamente.

### Movimentação dos peixes

Movimentar os peixes de forma aleatória me fez quebrar a cabeça um pouco no início, mas vi que utilizando as propriedades `top` e `left` do CSS, e utilizando javascript para gerar números aleatórios, eu conseguia fazer com que a cada 8 segundos, utilizando o `setInterval()`, o peixe se movesse para uma determinada posição (X, Y), e feito de forma suave usando o `transition linear`. Também fiz um `transform scaleX()` nas imagens dos peixes para mostrar se estavam indo para a esquerda ou direita.

## Rodar o projeto

Para rodar o projeto localmente, faça um clone deste repositório, dê um **npm install** e **npm run dev**, e assim ele será aberto em *localhost:5173*
