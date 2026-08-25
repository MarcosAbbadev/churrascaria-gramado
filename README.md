# Churrascaria Gramado

Site institucional da Churrascaria Gramado, em Jacareí (SP). A página foi construída para apresentar o restaurante de forma direta: mostrar a identidade da casa, facilitar o contato, informar localização e horário e criar uma experiência visual ligada à estrada, à madeira e ao fogo.

O projeto é uma página única, responsiva e sem dependências de framework. A base utiliza HTML, CSS e JavaScript puro.

## Estado atual

O site está organizado como uma landing page completa, com navegação por seções:

- Início
- Contato
- Localização
- Sobre
- Experiência
- Atendimento
- Galeria

O menu principal fica recolhido em um menu hambúrguer em todos os tamanhos de tela. No desktop, ele abre como um painel abaixo do header; no mobile, ocupa a largura disponível sem empurrar ou quebrar a barra superior.

## Identidade visual

A direção visual foi definida como uma mistura de restaurante tradicional, parada de estrada e acabamento editorial. A ideia não era criar uma página cheia de efeitos, mas transmitir calor, confiança e tempo de história.

As principais decisões foram:

- tons de madeira escura, creme, terracota, caramelo e brasa;
- títulos serifados para reforçar tradição;
- textos de apoio mais limpos e objetivos;
- uso controlado de bordas, sublinhados e espaço vazio;
- CTAs claros, sem transformar cada informação em um botão;
- contraste suficiente sobre imagens e fundos escuros;
- componentes sem dependência de bibliotecas externas.

O selo “40 anos de história” foi colocado no Hero, abaixo da localização e antes do título principal. Ele funciona como uma informação de tradição, sem competir com o nome da churrascaria.

## Estrutura da página

### Header

O header recebeu a logo transparente original acompanhada do wordmark “CHURRASCARIA GRAMADO”. O nome foi mantido acessível no link da marca.

Também foram definidos:

- botão “Fale Conosco”;
- botão hambúrguer com estado acessível;
- navegação para todas as seções da página;
- fechamento do menu ao clicar em um link;
- fechamento pelo teclado com `Esc`;
- layout que continua em uma única linha em telas estreitas.

Durante os testes, o header foi ajustado especialmente para larguras de 320px e 375px. O wordmark, o botão e o hambúrguer permanecem na mesma linha, sem overflow horizontal.

### Hero

O Hero é a abertura da página e concentra a mensagem principal da marca:

- localização na Rodovia Presidente Dutra, em Jacareí;
- selo “40 anos de história”;
- título “Churrascaria Gramado”;
- frase “Uma boa parada faz parte da viagem.”;
- descrição curta;
- horário de funcionamento;
- ações para conhecer, chegar e falar pelo WhatsApp.

Os botões transparentes receberam um fundo escuro translúcido, uma borda clara discreta e leve desfoque. O objetivo foi preservar a imagem do banner sem deixar os textos difíceis de ler.

#### Efeito de faíscas

O efeito de fogo passou por mais de uma abordagem. Primeiro foi tentado um conjunto de animações CSS. Como o movimento não ficou natural e algumas faíscas permaneceram estáticas, a implementação foi substituída por um sistema de partículas em Canvas 2D.

Cada partícula tem suas próprias características:

- posição e velocidade;
- trajetória levemente inclinada;
- gravidade e vento;
- tamanho, cor e duração variados;
- brilho e rastro curto;
- nascimento e desaparecimento independentes;
- oscilação suave de intensidade.

O Canvas fica limitado ao Hero, não captura cliques e acompanha o redimensionamento da janela. A quantidade de partículas foi limitada para evitar peso desnecessário em celulares. A animação também respeita `prefers-reduced-motion`.

### Contato

A seção Contato foi a parte mais refinada do projeto. O objetivo era fugir de três cards iguais e aproximar a composição de sites de restaurantes sofisticados, que normalmente apresentam telefone, WhatsApp e redes sociais de maneira mais direta.

A composição atual é:

- título centralizado no topo;
- frase curta explicando a seção;
- espaço lateral livre;
- Telefone e WhatsApp próximos do centro;
- colunas centrais um pouco mais largas que as laterais;
- botões com o mesmo tratamento visual;
- números com a mesma cor;
- bloco de redes sociais abaixo;
- título “Redes sociais” centralizado;
- sublinhado terracota de 3px próximo ao título;
- Instagram e Facebook abaixo, orientados um para o outro;
- redes sociais mantidas como ação secundária.

O telefone continua sendo um link `tel:` e o WhatsApp utiliza um link `wa.me` com mensagem inicial. Os ícones individuais das redes sociais foram preservados, mas o ícone de Instagram foi retirado do título para deixar a hierarquia mais limpa.

O link “Ver localização e horário” foi removido desta seção. A localização continua existindo como uma seção própria da página.

### Localização

A seção apresenta endereço, horário de funcionamento e botão para abrir o mapa. Ela foi mantida separada do Contato para que a pessoa consiga identificar rapidamente onde o restaurante está e como chegar.

### Sobre e Experiência

Essas seções trabalham a história, o posicionamento e a atmosfera da Churrascaria Gramado. A apresentação combina texto, imagem e cards de apoio, evitando que a página pareça apenas uma lista de serviços.

### Atendimento

A seção Atendimento explica de forma rápida o que o restaurante oferece:

- refeição no local;
- retirada na porta;
- não realizamos entregas.

Os ícones foram revisados individualmente. O primeiro passou por algumas alternativas até chegar a um prato com talheres, mais coerente com a refeição no salão. O segundo foi trocado por uma sacola para representar retirada. Os ícones foram ampliados para ter presença suficiente sem competir com os textos.

### Galeria e rodapé

A galeria reúne as imagens disponíveis no projeto e o rodapé repete as informações essenciais de marca, navegação, contato e redes sociais. A repetição é intencional: no fim da página, a pessoa não precisa voltar ao topo para encontrar os dados principais.

## Histórico de desenvolvimento

### 1. Estrutura inicial

O projeto começou como uma página institucional simples, com navegação, Hero, informações do restaurante, contato, localização, experiência, atendimento, galeria e rodapé.

### 2. Header e navegação

O menu foi transferido para o hambúrguer em todos os tamanhos de tela. Isso evitou que os links ocupassem espaço demais no desktop e manteve a mesma lógica de navegação no celular.

Depois, o header recebeu a imagem transparente da logo e o nome da marca ao lado. Foram feitos ajustes de escala e espaçamento para evitar cortes no wordmark em telas de 320px e 375px.

### 3. Revisão de responsividade

O header foi conferido em 1440px, 375px e 320px. O principal problema encontrado foi a disputa por espaço entre logo, botão de contato e hambúrguer nas telas menores. O wordmark e o botão foram reduzidos proporcionalmente, sem empilhar os elementos.

O menu aberto foi verificado em coluna, com os seis links visíveis e sem sobreposição indevida do conteúdo principal.

### 4. Ajustes do Hero

Os botões transparentes receberam fundo translúcido para melhorar a leitura. Em seguida, foi incluído o selo dos 40 anos e o efeito de faíscas saindo do banner.

O efeito de faíscas foi refeito quando a primeira versão CSS apresentou comportamento estático. A versão final usa Canvas 2D por oferecer melhor controle de trajetória e suavidade, mantendo o recurso isolado no Hero.

### 5. Ícones e atendimento

Foram adicionados ícones SVG inline ao Contato e ao Atendimento, sem instalar bibliotecas. No Atendimento, os símbolos foram trocados conforme a leitura visual melhorou: cadeira, prato com talheres e sacola foram testados até chegar à composição atual.

### 6. Evolução da seção Contato

A seção passou por várias composições:

1. três cards com o mesmo peso;
2. título e contatos em colunas opostas;
3. título centralizado e cards lado a lado;
4. hierarquia com telefone e WhatsApp como ações principais;
5. redução de caixas, sombras e círculos para uma aparência mais sofisticada;
6. organização em quatro colunas: espaço, Telefone, WhatsApp, espaço;
7. redes sociais separadas abaixo;
8. padronização de botões, números, alinhamento e cores.

O resultado final privilegia os contatos principais sem deixar uma terceira coluna vazia ou visualmente sem função.

### 7. Acabamento final

Na etapa final foram feitos ajustes pequenos, mas importantes:

- remoção do link de localização do Contato;
- padronização dos botões “Ligar agora” e “Falar pelo WhatsApp”;
- padronização da cor dos números de telefone;
- remoção do ícone do título “Redes sociais”;
- sublinhado terracota de 3px no título;
- aproximação do sublinhado ao texto;
- aumento moderado da largura dos cards principais.

## Arquivos principais

```text
index.html                 Estrutura e conteúdo da página
css/style.css              Identidade visual, layout e responsividade
js/main.js                 Menu hambúrguer e partículas do Hero
assets/images/logo/        Logo original e versão transparente
javascript/                Arquivos JavaScript legados ou auxiliares
```

## Como executar localmente

O site é estático. Pode ser aberto diretamente no navegador ou servido por uma extensão como Live Server.

Exemplo com Live Server:

1. Abra a pasta do projeto no VS Code.
2. Abra `index.html`.
3. Inicie o Live Server.
4. Acesse a URL local exibida pelo editor.

Para testar a responsividade, confira pelo menos:

- 320px de largura;
- 375px de largura;
- 393px de largura;
- 430px de largura;
- 768px de largura;
- 1440px de largura.

## Validações realizadas

As validações usadas durante o desenvolvimento foram:

```bash
git diff --check
node --check js/main.js
```

Também foram feitos testes visuais no navegador conectado em 320px, 375px e 1440px, principalmente para verificar o header, o menu, o Hero e a seção Contato.

O `git diff --check` pode informar que arquivos com LF serão convertidos para CRLF pelo Git no próximo acesso. Isso é um aviso de normalização de quebra de linha, não um erro de conteúdo.

## Próximos passos recomendados

Antes de publicar, ainda vale revisar:

- substituição do banner genérico por fotos reais, se disponíveis;
- otimização das imagens para WebP ou AVIF;
- favicon e metadados Open Graph;
- descrição SEO e dados estruturados de negócio local;
- conferência final de todos os links reais;
- teste do Canvas em celulares mais antigos;
- revisão de codificação dos textos antigos que ainda podem conter caracteres corrompidos;
- inclusão dos arquivos não rastreados no commit, especialmente `js/` e `assets/images/logo/`.

## Observação sobre o commit

As alterações foram desenvolvidas e validadas localmente. O commit e o push devem ser feitos somente depois de conferir o diff completo e confirmar que os assets e o JavaScript não rastreados fazem parte desta entrega.
