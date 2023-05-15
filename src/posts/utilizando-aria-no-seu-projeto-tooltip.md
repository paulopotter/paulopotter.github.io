---
title: Utilizando ARIA no seu projeto - Tooltip
category:
 - Acessibilidade
 - HTML
date: '2022-07-17'
series: Utilizando ARIA no seu projeto
cover_image: ./images/Utilizando Aria - Tooltip/tooltip-cover.webp
cover_image_by: Imagem retirada do Google imagens
cover_image_alt: Simbolo de acessibilidade com um tooltip
---
Fala aê, como cê ta?!

Continuando com a série de posts que estou fazendo sobre as propriedades ARIA, hoje é o dia da role `tooltip`.
Essa é uma role bem simples e rápida, veja só...

<!-- END_SUMMARY -->

## Tooltip

_Nota: Ainda estou seguindo a versão 1.1 do WAI-ARIA. (a versão 1.2 ainda está em desenvolvimento.)_

> Tooltip ou dica de contexto é um elemento comum de interface gráfica.
> Tooltip é aquela moldura flutuante que abre quando passa-se o mouse sobre um elemento da interface e que contém uma explicação adicional sobre tal elemento. É utilizado em conjunto com um cursor, normalmente um ponteiro do mouse... - [Wikipédia](https://pt.wikipedia.org/wiki/Tooltip)

> Um tooltip normalmente se torna visível em resposta a um foco do mouse ou depois que o elemento proprietário recebe o foco do teclado. Em cada um desses casos, os autores DEVEM exibir a dica de ferramenta após um pequeno atraso. O uso de uma dica de ferramenta WAI-ARIA é um complemento ao comportamento normal da dica de ferramenta do agente do usuário. - W3Org (tradução livre)

Resumindo: o tooltip é uma dica que geralmente está escondida e depois de uma ação ela aparece. Colocar a `role="tooltip"` **não** esconde o elemento, você precisa esconder ele (caso queira) manualmente.

Você **TEM** que garantir que o tooltip seja referenciado por outro elemento com a utilização do `aria-describedby` (veja os exemplos mais abaixo).

### ****Propriedades dos elementos filhos necessários:****

O tooltip não possui filho. Todos os estados e propriedades são do elemento que irá utilizar a role tooltip

### Estados e Propriedades:

Todas as roles possuem estados (state) e propriedades (properties) onde estados podem ser mudados e suas mudanças podem executar algum tipo de ação e as propriedades que são fixas e quando alteradas, não haverá mudança na interpretação do leitor de tela (por exemplo).

### States


| Nome            | Descrição                                                                                                                                                                             | Valor padrão |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :----------- |
| `aria-busy`     | Indica que um elemento está sendo modificado e que as tecnologias assistivas ****podem**** <br/>querer esperar até que as modificações sejam concluídas antes de expô-las ao usuário. | `false`      |
| `aria-current`  | Indica o elemento que representa o item atual em um contêiner ou conjunto de elementos relacionados.                                                                                  | `false`      |
| `aria-disabled` | Indica que o elemento é perceptível, mas desativado, portanto, não é editável ou operável de outra forma .                                                                            | `false`      |
| `aria-expanded` | Indica se o elemento, ou outro elemento de agrupamento que ele controla, está atualmente expandido ou reduzido.                                                                       | `undefined`  |
| `aria-hidden`   | Indica que o elemento não é perceptível.                                                                                                                                              | `undefined`  |

<br/>

- _Nota: alguns estados foram ocultados nessa tabela, ou por não serem mais suportados ou por (na minha visão) não fazerem sentido para essa `role` (resumindo, não entendi como funcionada_ 🤪 _)._

### Properties


| Nome                   | Descrição                                                                                                                                                                                                                                   | Valor padrão                        |
| :--------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------------------- |
| `aria-atomic`          | Indica se as tecnologias assistivas apresentarão toda ou apenas partes da região alterada com base nas notificações de alteração definidas pelo atributo `aria-relevant`.                                                                   | `false`                             |
| `aria-controls`        | Identifica o elemento (ou elementos) cujo conteúdo ou presença são controlados pelo elemento atual.                                                                                                                                         | -                                   |
| `aria-describedby`     | Identifica o elemento (ou elementos) que descreve o objeto.                                                                                                                                                                                 | -                                   |
| `aria-details`         | Identifica o elemento que fornece uma descrição detalhada e estendida para o objeto.  Este atributo faz referência a um único elemento que fornece informações mais detalhadas do que normalmente seriam fornecidas por `aria-describedby`. | -                                   |
| `aria-errormessage`    | Identifica o elemento que fornece uma mensagem de erro para o objeto. Este atributo faz referência a outro elemento que contém o texto da mensagem de erro personalizada.                                                                   | -                                   |
| `aria-flowto`          | Identifica o próximo elemento (ou elementos) em uma ordem de leitura alternativa de conteúdo que, a critério do usuário, permite que a tecnologia de assistência substitua o padrão geral de leitura na ordem de origem do documento.       | -                                   |
| `aria-haspopup`        | Indica a disponibilidade e o tipo de elemento pop-up interativo, como menu ou caixa de diálogo, que pode ser acionado por um elemento.                                                                                                      | -                                   |
| `aria-keyshortcuts`    | Indica atalhos de teclado que foi implementado para ativar ou dar foco a um elemento.                                                                                                                                                       | -                                   |
| `aria-label`           | Define um valor de string que rotula o elemento atual.                                                                                                                                                                                      | **Geralmente o texto do elemento.** |
| `aria-labelledby`      | É uma mistura entre o `aria-label` e o `aria-describedby`. <br/>Ele fornece ao usuário um nome reconhecível do objeto utilizando outro elemento para descreve-lo.                                                                           | -                                   |
| `aria-live`            | Indica que um elemento será atualizado e descreve os tipos de atualizações que os agentes do usuário , as tecnologias assistivas e o usuário podem esperar da região ativa.                                                                 | `off`                               |
| `aria-roledescription` | Define uma descrição legível por humanos e localizada pelo autor para a role de um elemento.                                                                                                                                                | -                                   |

<br />

- _Nota: algumas propriedades foram ocultadas nessa tabela, ou por não serem mais suportados ou por (na minha visão) não fazerem sentido para essa `role`(resumindo, não entendi como funcionada_ 🤪 _)._
- _Nota<sup>2</sup> : Enquanto eu desenvolvia os exemplos, notei que nem todos as propriedades/estados funcionam (pelo menos no VoiceOver)._

### Exemplos:

Exemplo 1:

```html
<div class="wrapper">
    <button class="tooltip-trigger" aria-describedby="tooltip-description">Passe o mouse</button>
    <span id="tooltip-description" role="tooltip">Esse texto descreve o botão.</span>
</div>
```

Exemplo 2:

```html
<div class="wrapper">
  <label for="tooltip-input">Clique no input</label>
    <input type="text" class="tooltip-trigger" aria-describedby="tooltip-input-description" id="tooltip-input" />
    <span id="tooltip-input-description" role="tooltip">Esse é um input de texto.</span>
</div>
```

No primeiro exemplo, é o exemplo mais básico da utilização da role tooltip, e quando ele estiver com o foco, o leitor de tela irá dizer que é um botão e que a "descrição" do botão é: Esse texto descreve o botão.

Já o segundo exemplo é a versão de um tooltip em um input de texto.

Veja os exemplos com estilo e funcionando:

<iframe height="300" style="width: 100%;" scrolling="no" title="Exemplo aria role Tooltip " src="https://codepen.io/paulooliveira/embed/MWVJQMo?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/paulooliveira/pen/MWVJQMo">
  Exemplo aria role Tooltip </a> by Paulo Oliveira (<a href="https://codepen.io/paulooliveira">@paulooliveira</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## E na tv?

<figure>
    <img src="https://images.samsung.com/is/image/samsung/assets/br/p6_gro2/p6_initial_info/accessibility/mobile/tv_voice_guide-v1.png" alt="Tv com um balão representando a tv falando o nome do canal na tela."><br/>
    <center><figcaption>Créditos: <a href="https://www.samsung.com/br/accessibility/tv/">Samsung</a></figcaption></center>
</figure>

Como é de se esperar, não vou esquecer de comentar a minha querida Smart TV! E assim como na web algumas Smart TVs possuem suporte ao <abbr title="Text to Speech">TTS</abbr>, elas em sua grande maioria (quando suporta) age igual ao que é utilizado para WEB, logo, não muda nada do que foi apresentado.

A Samsung é a fabricante que mais se preocupa com a acessibilidade, ela por padrão já da suporte ao TTS, mas se comporta diferente em alguns casos.

A tabela a seguir, mostra o suporte dela para as propriedades mostradas nesse post.

<figure>
    <img src='./images/Utilizando Aria - Tooltip/Tabela samsung tooltip.png' alt="Tabela de especificações da Samsung sobre a utilização da tag aria do tooltip"><br/>
    <center><figcaption>Créditos: <a href="https://developer.samsung.com/smarttv/develop/guides/fundamentals/text-to-speech.html">Samsung</a></figcaption></center>
</figure>

### That`s all folks

Vou ficando por aqui, espero que você tenha gostado e que comece a utilizar essas essas roles enquanto estiver programando, não custa nada e o mínimo que você colocar já ajudará bastante.

Para informações mais completas, acesse a documentação (em inglês):

- [https://www.w3.org/TR/wai-aria-1.1/#tooltip](https://www.w3.org/TR/wai-aria-1.1/#tooltip) (🇺🇸)
