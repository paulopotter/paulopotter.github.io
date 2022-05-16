---
Title: Utilizando ARIA no seu projeto - Menu
Category: Acessibilidade, HTML
Date: '2021-09-17'
Series: Utilizando ARIA no seu projeto
cover_image: teclado-botao-cadeirante.jpg
cover_image_by: Imagem retirada do <a href="https://www.sabrehospitality.com/blog/wcag-is-your-hotel-fully-accessible-to-all-online-visitors/" alt="Botão no teclado com o simbolo de um cadeirante.">Google imagens</a>
cover_image_alt: Botão no teclado com o simbolo de um cadeirante.
---

Esse é o primeiro post da série que estarei fazendo sobre as propriedades ARIA para você saber como colocar no seu projeto.
Para começar eu resolvi começar com a navegação, então estarei falando sobre as roles: `menu`, `menuitem` ou `menubar`.
<!-- PELICAN_END_SUMMARY -->

A ideia é conseguir mostrar na prática como utilizar a propriedade ARIA do HTML e tentar descomplicar a documentação (pelo menos o que eu consegui entender).

Estarei seguindo a versão 1.1 do WAI-ARIA que foi a última versão publicada. (a versão 1.2 ainda está em desenvolvimento.)

Para ser sincero, eu ainda acho a documentação do [w3.org](http://w3.org) muito confusa e algumas explicações não fazem sentido, principalmente por não possuirem exemplos. Estarei mostrando aqui o que eu consegui extrair dessa documentação tentando ser o mais prático possível.

## Menu

Um menu geralmente é uma lista de ações ou funções comuns que o usuário pode chamar.

Para ser acessível pelo teclado, nós **devemos** gerenciar o foco dos itens do menu.

Com a criação do HTML5, não se faz mais necessário a utilização da `role='menu'` desde que você utilize a tag `<nav></nav>`

### **Propriedades dos elementos filhos necessários:**

Obrigatoriamente, o `menu` deverá possuir um ou mais elementos filhos e esses elementos deveram possuir uma das roles abaixo:

[jtable]
|   Role   | Descrição |
| `menuitem` |  Role que indica que o elemento é um item do menu. |
| `menuitemcheckbox` | Role que indica que o elemento é um item do menu e possui estado(state), comumente utilizado em itens de menu que contém subnivel. |
| `menuitemradio` | Role que indica que o elemento é um item do menu e possui um conjunto de elementos com a mesma função, dos quais apenas um pode ser verificado por vez.|
[/jtable]

### Estados e Propriedades:

Todas as roles possuem estados (state) e propriedades (properties) onde estados podem ser mudados e suas mudanças podem executar algum tipo de ação e as propriedades que são fixas e quando alteradas, não haverá mudança na interpretação do leitor de tela (por exemplo).

### States

[jtable]
| Nome | Descrição| Valor padrão |
| `aria-busy` | Indica que um elemento está sendo modificado e que as tecnologias assistivas **podem** <br/>querer esperar até que as modificações sejam concluídas antes de expô-las ao usuário.| `false`|
| `aria-current` | Indica o elemento que representa o item atual em um contêiner ou conjunto de elementos relacionados. | `false` |
| `aria-disabled` | Indica que o elemento é perceptível, mas desativado, portanto, não é editável ou operável de outra forma . | `false` |
| `aria-expanded` | Indica se o elemento, ou outro elemento de agrupamento que ele controla, está atualmente expandido ou reduzido. | `undefined` |
| `aria-hidden` |Indica que o elemento não é perceptível. |`undefined` |
[/jtable]

*Nota: alguns estados foram ocultados nessa tabela, ou por não serem mais suportados ou por (na minha visão) não fazerem sentido para essa `role` (resumindo, não entendi como funcionada* 🤪*).*

### Properties

[jtable]
| Nome| Descrição| Valor padrão |
| `aria-activedescendant` | Fornece um método alternativo de gerenciamento de foco para elementos interativos que podem conter vários descendentes focalizáveis | -  |
| `aria-atomic`           | Indica se as tecnologias assistivas apresentarão toda ou apenas partes da região alterada com base nas notificações de alteração definidas pelo atributo `aria-relevant`. | `false`|
| `aria-controls`         | Identifica o elemento (ou elementos) cujo conteúdo ou presença são controlados pelo elemento atual. | - |
| `aria-describedby`      | Identifica o elemento (ou elementos) que descreve o objeto. | -  |
| `aria-details`          | Identifica o elemento que fornece uma descrição detalhada e estendida para o objeto.  Este atributo faz referência a um único elemento que fornece informações mais detalhadas do que normalmente seriam fornecidas por `aria-describedby`.| - |
| `aria-errormessage`     | Identifica o elemento que fornece uma mensagem de erro para o objeto. Este atributo faz referência a outro elemento que contém o texto da mensagem de erro personalizada. |  - |
| `aria-flowto`           | Identifica o próximo elemento (ou elementos) em uma ordem de leitura alternativa de conteúdo que, a critério do usuário, permite que a tecnologia de assistência substitua o padrão geral de leitura na ordem de origem do documento. |  - |
| `aria-haspopup`         | Indica a disponibilidade e o tipo de elemento pop-up interativo, como menu ou caixa de diálogo, que pode ser acionado por um elemento. |  - |
| `aria-keyshortcuts`     | Indica atalhos de teclado que foi implementado para ativar ou dar foco a um elemento. |  - |
| `aria-label`            | Define um valor de string que rotula o elemento atual.| *Geralmente o texto do elemento.* |
| `aria-labelledby`       | É uma mistura entre o `aria-label` e o `aria-describedby`. <br/>Ele fornece ao usuário um nome reconhecível do objeto utilizando outro elemento para descreve-lo. | - |
| `aria-live`             | Indica que um elemento será atualizado e descreve os tipos de atualizações que os agentes do usuário , as tecnologias assistivas e o usuário podem esperar da região ativa. | `off` |
| `aria-orientation`      |  Indica se a orientação do elemento é horizontal, vertical ou desconhecida (?!) | `undefined` |
| `aria-roledescription`  | Define uma descrição legível por humanos e localizada pelo autor para a role de um elemento. | - |
[/jtable]
O padrão para `aria-orientation` é **vertical.**

*Nota: algumas propriedades foram ocultadas nessa tabela, ou por não serem mais suportados ou por (na minha visão) não fazerem sentido para essa `role`(resumindo, não entendi como funcionada* 🤪*).*

*Nota<sup>2</sup> : Enquanto eu desenvolvia os exemplos, notei que nem todos as propriedades/estados funcionam (pelo menos no VoiceOver).*

### Exemplos:
Exemplo 1:
```html
<div
role="menu"
aria-label="menu de teste"
tabIndex=0
>
  <!— ...conteúdo do menu —>
</div>

```

Exemplo 2:

```html

<nav
aria-label="menu de teste"
tabIndex=0
>
  <!— ...conteúdo do menu —>
</nav>

```

Exemplo 3:

```html

<ul
role="menu"
aria-labelledby="desc3"
tabIndex="0"
id="menu2"
>
  <!— ...conteúdo do menu —>
</ul>

<span id="desc3">
Descrição do segundo Menu
</span>

```

No primeiro exemplo, é o exemplo mais basico da utilização da role menu, e quando ele estiver com o foco, o leitor de tela irá dizer que é um menu e que o "nome" do menu é: menu de teste.

Já o segundo exemplo é a versão simplificada, utilizando o HTML5.

E no terceiro exemplo, a diferença é que o leitor de tela irá ler o "nome" do menu de outro elemento (no caso o `span` que contém o `id="desc3"`).

Em todos os exemplos eu utilizei o `tabIndex="0"` para gerenciar o focos do elemento. Essa propriedade diz ao navegador que esse elemento pode receber foco (ao pressionar `tab` o navegador procurará o próximo elemento que possui essa propriedade e que seja diferente de `-1`.)

[jtable]
| valor| descrição|
| -1 | o elemento não deverá receber foco |
| 0|  o elemento poderá receber foco |
| 1|  o elemento poderá receber foco e será o primeiro a recebê-lo|
| 2..n|  o elemento poderá receber foco e será o próximo a recebê-lo seguindo a ordem numérica.|
[/jtable]


## Menubar

Um menu que geralmente permanece visível e geralmente é apresentada horizontalmente.

Nós **devemos** garantir que a interação seja semelhante à interação típica da barra de menus em uma interface gráfica de usuário de desktop e para ser acessível pelo teclado, nós **devemos** gerenciar o foco dos itens do menu.

Seus estados e propriedades **são os mesmos** do `menu` (logo não irei repeti-los), com a diferença que o padrão para `aria-orientation` é **horizontal.**


## Menuitem

Uma opção em um conjunto de opções contidas por um `menu` ou `menubar`.

Nós **devemos** garantir que a interação seja semelhante à interação típica da barra de menus em uma interface gráfica de usuário de desktop e para ser acessível pelo teclado, nós **devemos** gerenciar o foco dos itens do menu.

Seus estados e propriedades são os mesmos do `menu` (logo não irei repeti-los), exceto que **não possui** o estado `aria-expanded` e as propriedades `aria-activedescendant` e `aria-orientation`, que estão presentes no `menu`


## E na tv?

<figure>
    <center>
        <img src="./images/voce-ja-pensou-sobre-acessibilidade-a11y/tv_voice_guide-v1.png" alt="Tv com um balão representando a tv falando o nome do canal na tela."><br/>
        <figurecaption>Créditos: <a href="https://www.samsung.com/br/accessibility/tv/">Samsung</a></figurecaption>
    </center>
</figure>

Como é de se esperar, não vou esquecer de comentar a minha querida Smart TV! E assim como na web algumas Smart TVs possuem suporte ao <abbr title="Text to Speech">TTS</abbr>, elas em sua grande maioria (quando suporta) age igual ao que é utilizado para WEB, logo, não muda nada do que foi apresentado.

A Samsung é a fabricante que mais se preocupa com a acessibilidade, ela por padrão já da suporte ao TTS, mas se comporta diferente em alguns casos.
A tabela a seguir, mostra o suporte dela para as propriedades mostradas nesse post.

<figure>
    <center>
        <img src='./images/Utilizando Aria - Menu/Tabela samsung menu.png' alt="Tabela de especificações da Samsung sobre a utilização da tag aria do menu, menuitem e menubar"><br/>
        <figurecaption>Créditos: <a href="https://developer.samsung.com/smarttv/develop/guides/fundamentals/text-to-speech.html">Samsung</a></figurecaption>
    </center>
</figure>

### That`s all folks

Vou ficando por aqui, espero que você tenha gostado e que comece a utilizar essas essas roles enquanto estiver programando, não custa nada e o mínimo que você colocar já ajudará bastante.

Para informações mais completas, acesse a documentação (em inglês):

- [https://www.w3.org/TR/wai-aria-1.1/#menubar](https://www.w3.org/TR/wai-aria-1.1/#menubar) (🇺🇸)
- [https://www.w3.org/TR/wai-aria-1.1/#menu](https://www.w3.org/TR/wai-aria-1.1/#menu) (🇺🇸)
- [https://www.w3.org/TR/wai-aria-1.1/#menuitem](https://www.w3.org/TR/wai-aria-1.1/#menuitem) (🇺🇸)
