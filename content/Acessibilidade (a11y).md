Title: Você já pensou sobre Acessibilidade (a11y)?
Category: Acessibilidade
Tags: Smart TV, Acessibilidade
Date: 2021-05-23
cover_image: acessibility-uxplanet.jpeg
cover_image_by: Imagem retirada do <a href="https://uxplanet.org/web-accessibility-explained-c2408636eee0" alt="Simbolo da acessibilidade para todos.">UX Planet</a>
cover_image_alt:Simbolo da acessibilidade para todos.

Hoje eu vou falar um pouco do <strike>pouco</strike> conhecimento que tenho sobre acessibilidade na web, e o porquê você deveria conhecer também.<br/>
Neste post, tentarei arranhar uma camada do que é esse mundo e espero que isso incentive a você procurar saber mais também.
<!-- PELICAN_END_SUMMARY -->

E já começo me desculpando, pois ainda não arrumei a acessibilidade do meu blog, mas sei que ele não está tão ruim quanto a maioria dos sites que encontramos por ai, mas pretendo subir algumas atualizações para melhorar a usabilidade dele para incluir a todos.

*Nota: Quando eu comecei a procurar mais sobre o assunto acabei encontrando também com o nome __a11y__*.

## De onde surgiu esse assunto?

Em uma das reuniões de meta do time onde eu estou atuando, surgiram com a ideia de validar se o nosso app estava acessível para as pessoas com algum tipo de deficiência (PCD). Quando fomos validar, mesmo sabendo que nunca tínhamos feito algo relacionado a isso no produto (como boa parte de todos os desenvolvedores de software), nós nos assustamos. <br/>
Quando usamos um aplicativo que fazia leitura de tela e o mesmo **entrava mudo e saia calado**, nem uma palavra sequer era dita pelo leitor de tela, vimos que precisávamos agir em cima disso.

Como estávamos com um backlog mais folgado, resolvemos rodar um estudo para ver o que seria preciso para ter essa acessibilidade no projeto. Ficamos com isso na cabeça por um tempo e quando tivemos a oportunidade, levamos essa ideia para virar meta do time no trimestre.

Após os estudos realizados pela nossa UX (e que estudo da hora, valeu Gi!! ❤), além de descobrirmos o óbvio que, não podemos dizer que somos acessíveis apenas colocando o app para ser lido, existem outros problemas que precisam de atenção na hora de tornar a sua aplicação mais acessível (falarei mais deles mais a frente).

Com isso começamos a pensar mais como podemos tornar o nosso app mais acessível. Ainda estamos engatinhando nesse assunto, porém estamos tentando. Resolvemos incluir cada um dos aspectos de acessibilidade(contraste, voz, tamanho de fonte...) aos poucos, começando com a leitura da tela, por ser o mais simples de se começar a implementar (no nosso caso) e em paralelo, tentar estudar outras formas e o que podemos aplicar na app para incluir os outros pontos do aspecto da acessibilidade.

<center style="font-size: 40px">. . .</center><br/>

<figure>
    <img src="https://cdn.lynda.com/course/606090/606090-637491159569845272-16x9.jpg" alt="Imagem com três simbolos representando: deficiência cognitiva, deficiência visual e deficiência auditiva. No fundo uma tela com o símbolo da acessibilidade na web.">
    <center><figurecaption>Créditos: google</figurecaption></center>
</figure>
> Cerca de 15% da população mundial vive com algum tipo de deficiência e em torno de 2.2 bilhões de pessoas têm deficiência visual ou cegueira. - *World Health Organization report from 2019*

Isso já nos mostra que a parcela da população que precisa de alguma adaptação para poder estar no ciclo das interações sociais da grande massa, não é pequena.

Quando falamos sobre acessibilidade web, a primeira (e às vezes, única) adaptação que a nós pensamos, é apenas para pessoas cegas. Sinto-lhe informar, mas não existe apenas pessoas com problemas  de visão que necessitam de uma web melhor.

### Tipos de deficiências:

_(Nota: toda essa seção foi copiada do [manual de comunicação inclusiva e acessível](https://zeroheight.com/5719ee47f/p/914194-tipos-de-deficincias) do Banco Carrefour.)_

- **Física** : Engloba limitações motoras tais como tetraplegia, paraplegia, paralisia cerebral, amputação de membros, entre outras.
- **Intelectual**: Refere-se a limitações em habilidades mentais que envolvem raciocínio, resolução de problemas, entre outras.
- **Auditiva**: É a redução ou a ausência da capacidade de ouvir.
- **Visual**: Redução ou ausência total da visão.
- **Surdocegueira**: Ausência conjunta da audição e da visão.
- **Dificiência múltipla**: Associação de duas ou mais deficiências.

E elas podem ser **deficiências permanentes** ou **transitórias** (acesse o link do Banco Carrefour, mencionado antes, para mais informações).

## Como mudar isso?

Tá! Agora que você arranhou esse assunto (sim, ele é mais denso e tem mais coisas além do que foi dito até então), como eu posso começar a fazer alguma diferença?

Com pequenos passos, nós já podemos fazer uma grande diferença. Se fizermos nosso site com a semântica certa, além de melhorar como os sites de busca entende o nosso site, também facilitará os leitores de tela a entender um pouco melhor o seu site.

Na web existe o [WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications)](https://www.w3.org/TR/wai-aria-1.1/)( veja também o [WAI guidelines](https://www.w3.org/WAI/standards-guidelines/aria/)) que define uma maneira de tornar o conteúdo da Web e os aplicativos da Web mais acessíveis para pessoas com algum tipo deficiência.

Além de utilizar as tags certas para o que elas foram criadas, como **`nav`** para um menu/navegação, **`main`** para o conteúdo principal ou **`footer`** para o rodapé, por exemplo (então pare de usar **`div`** para tudo #ficadica), você pode (e deve) utilizar as propriedades **`aria`** que definem semânticas adicionais que não são suportadas no HTML padrão. Deixo [esse artigo no desenvolvimento para web](https://desenvolvimentoparaweb.com/miscelanea/aria-acessibilidade-web-a11y/) falando um pouco mais sobre **`aria`**, para um melhor entendimento.

## E nas Smart TVs?

<figure>
    <center>
        <img src="https://images.samsung.com/is/image/samsung/assets/br/p6_gro2/p6_initial_info/accessibility/mobile/tv_voice_guide-v1.png" alt="Tv com um balão representando a tv falando o nome do canal na tela."><br/>
        <figurecaption>Créditos: <a href="https://www.samsung.com/br/accessibility/tv/">Samsung</a></figurecaption>
    </center>
</figure>

Como o meu foco é Smart TVs, não posso deixar de falar como podemos também melhorar o uso das pessoas com deficiencia nesse device.

Existem algumas TVs no mercado que possuem a função "Text-to-Speech" (TTS)(texto para áudio) que lê tudo o que está na tela para o usuário. Mas infelizmente não são todas as fabricantes que colocam essa funcionalidade nas suas Smart TVs &#x1F615;.

A Samsung acaba saindo na frente, pois boa parte das TVs dela que eu tive contato eu acabei encontrando esse recurso. A queridinha da vez [TU8000](https://www.samsung.com/br/tvs/uhd-4k-tv/tu8000-50-inch-crystal-uhd-smart-tv-un50tu8000gxzd/), por exemplo, possui esse recurso que a Samsung chama de **Guia de Voz**. E para você, que vai desenvolver para ela, pode acompanhar o que eles suportam ou não no guia de [acessibilidade para Tizen](https://developer.samsung.com/smarttv/develop/guides/fundamentals/text-to-speech.html).

Assim como na web, as mudanças na sua app para começar a dar suporte a leitores de tela, são mínimos.<br/>
Começando, fazendo tudo o que foi dito no tópico anterior, mas agora com um adicional, utilize o **`focus()`**no elemento que estiver focado enquanto o usuário navega, pois, é através dele que a TV entende o que está focado e, consequentemente, fala o que está na tela.

Recomendo, para quem possui uma TV com a função TTS, acessar as Apps do Youtube e da Amazon Prime (Não consegui utilizar a Netflix e o Disney+ quando eu fiz os testes numa Samsung). Elas mostram como entregar o que estamos vendo na tela, apenas com o áudio.

## Apps e extensões:

Essas extensões são para te ajudar a desenvolver, se quiser para usar no dia a dia olhe a seção de [links uteis](#links-uteis)

- **Apps para TTS**:
    - VoiceOver (MacOs): Nativo
    - [NVDA](https://www.nvaccess.org/) (Windows): Leitor de tela que interage com o sistema operacional e transforma conteúdo textual em fala.
    - [Orca](https://help.gnome.org/users/orca/stable/introduction.html.pt_BR) (Linux): Leitor de tela livre e gratuito.

- **Extensões para chrome**:
    - [Accessibility insights](https://chrome.google.com/webstore/detail/accessibility-insights-fo/pbjjkligggfmakdaogkfomddhfmpjeni).
    - [Screen reader](https://chrome.google.com/webstore/detail/screen-reader/kgejglhpjiefppelpmljglcjbhoiplfn/related).

- **Extensões para vscode**:
    - [axe Accessibility Linter](https://marketplace.visualstudio.com/items?itemName=deque-systems.vscode-axe-linter).
    - [Web Accessibility](https://marketplace.visualstudio.com/items?itemName=MaxvanderSchee.web-accessibility).

- **Para seu projeto**:
    - [axe core react](https://github.com/dequelabs/axe-core-npm/blob/develop/packages/react/README.md).
    - [Reakit github](https://github.com/reakit/reakit) | [Reakit site](https://reakit.io/).
    - [Storybook A11y addon](https://storybook.js.org/addons/@storybook/addon-a11y/).



## That`s all folks:
Espero que após ler esse post, você tenha se interessado nesse assunto e comece a fazer a diferença nos seus projetos, pensando, projetando e incluindo mais acessibilidade. A seguir, deixarei vários links beeem úteis para ler mais sobre o assunto.

**Fontes e inspirações**:

- Como eu já comentei algumas vezes, parte das informações foram pegas da apresentação (interna) sobre o **Estudo de acessibilidade em Smart TVs** que a UX do time, Giovanna, mostrou para nós (sem link externo). Obrigado Gi! ❤
- [Manual de comunicação inclusiva e acessível](https://zeroheight.com/5719ee47f/p/914194-tipos-de-deficincias) do Banco Carrefour.
- Estudos e pesquisas, na internet, sobre o assunto.


## <a id="links-uteis"></a>Links uteis

- [Artigo sobre usabilidade em Smart TVs (🇺🇸)](https://www.nngroup.com/articles/smart-tv-usability/).
- [Matéria sobre novas features de acessibilidade em Smart TVs da Samsung (🇺🇸)](https://www.cnet.com/news/samsung-makes-its-2021-tvs-more-accessible-for-people-with-vision-or-hearing-disabilities/) e [algumas dessas features explicada pela a própria Samsung](https://www.samsung.com/br/accessibility/tv/).
- [As 60+ configurações que fazem deste o jogo mais acessível da Naughty Dog até então](https://blog.br.playstation.com/2020/06/09/the-last-of-us-part-ii-opcoes-de-acessibilidade-detalhadas/).
- Artigo bem completo sobre [Boas práticas de acessibilidade digital](https://mwpt.com.br/acessibilidade-digital/boas-praticas/) da [Web para todos](https://mwpt.com.br/)
- [Exemplos de códigos acessíveis](https://mwpt.com.br/codigos-acessiveis/)
- [Ferramentas gratuitas de tecnologia assistiva](https://cta.ifrs.edu.br/tecnologia-assistiva/ferramentas-gratuitas-de-ta/)) do [Centro Tecnológico de Acessibilidade do IFRS ](https://cta.ifrs.edu.br/)
- [Atalhos de acessibilidade do Mac](https://support.apple.com/pt-br/HT204434)
- [Atalhos de teclado de acessibilidade do Windows](https://support.microsoft.com/pt-br/windows/atalhos-de-teclado-de-acessibilidade-do-windows-021bcb62-45c8-e4ef-1e4f-41b8c1fc87fd)
- [Conheça os elementos semânticos da HTML5](https://www.devmedia.com.br/html-semantico-conheca-os-elementos-semanticos-da-html5/38065)
