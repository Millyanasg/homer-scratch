
### Projeto Raspadinha Interativa
>Este projeto é uma implementação simples de uma raspadinha interativa, utilizando tecnologias web padrão. O objetivo é permitir que o usuário "raspe" uma área do navegador para revelar uma imagem ou mensagem oculta por baixo.

#### Tecnologias Utilizadas
- **HTML5:** Estrutura da página e definição dos elementos do canvas onde a raspadinha acontece.
- **CSS3:** Estilização dos elementos da página, incluindo o canvas e o botão de reinício.
- **JavaScript:** Lógica interativa para permitir a ação de raspar, calcular a porcentagem raspada e reiniciar a raspadinha.
- 
#### Funcionalidades
- **Raspadinha Interativa:** Os usuários podem usar o mouse para "raspar" uma camada superior, revelando gradualmente uma imagem ou mensagem escondida embaixo.
- **Calculo de Área Raspada:** O script verifica continuamente a porcentagem da área raspada. Quando mais de 70% da área for raspada, um botão de reinício é mostrado.
- **Botão de Reinício:** Um botão que permite aos usuários reiniciar a experiência da raspadinha, restaurando a camada superior e escondendo novamente a imagem ou mensagem.

#### Como Funciona
- **Preparação do Canvas:** Duas camadas de canvas são preparadas, uma para a imagem de fundo (mensagem/imagem a ser revelada) e outra para a camada superior que os usuários vão raspar.
- **Raspadinha:** Utilizando eventos de mouse e touchscreen, os usuários podem "raspar" a camada superior. Isso é feito alterando a operação de composição do contexto do canvas para "destination-out", efetivamente apagando a área onde o mouse se move.
- **Verificação de Progresso:** À medida que a área é raspada, o script verifica a porcentagem da área revelada. Uma vez que atinge 70%, um botão de "Reiniciar" é mostrado.
- **Reinício:** O botão de reinício, quando pressionado, restaura a camada superior para seu estado original, permitindo que o usuário comece a raspadinha novamente do início.

| ![homer1](https://github.com/Millyanasg/homer-scratch/assets/104023907/8d25e368-ce2c-4610-8cdd-55ebba0dc8c1)  | ![homer3](https://github.com/Millyanasg/homer-scratch/assets/104023907/e0fda188-b409-4d74-8a43-8a95d69d2598)| ![homer2](https://github.com/Millyanasg/homer-scratch/assets/104023907/c5855bfb-efbc-4abe-8b4f-ee609190828f) |
|:------------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------:|
|                                        Inicio                                                                |                                        Durante                                                             |                                        Final                                                             |
