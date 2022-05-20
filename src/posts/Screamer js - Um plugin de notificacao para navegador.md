---
title: Screamer-js - Um plugin js de notificação para Browser
Category: Js
Date: "2017-09-13"
cover_image: ./images/Screamer.png
cover_image_alt: Screamer Logo
---

Fala pessoal, como é que cês tão?! 😜

Em um dos projetos que trabalhamos na globo, era preciso uma notificação que demorasse mais para desaparecer e que independente da aba do browser nós estivéssemos nós deveríamos conseguir vê-la. Com isso tivemos a ideia de criar um notificador no browser.

[Sumary]
Em um hack-day[^1] na globo.com eu e o [Willian Justen](https://willianjusten.com.br/) fizemos um plugin javascript sanar esse problema. E esse foi quando o [Screamer-js](https://github.com/willianjusten/screamer-js) nasceu.


## O que é?

![screenshot](https://raw.githubusercontent.com/willianjusten/screamer-js/master/screenshot.png)

O screamer-js é um plugin javascript (puro 😆 ) de fácil configuração utilizando o [Web Notification API](https://developer.mozilla.org/en-US/docs/Web/API/notification)

> Screamer.js is a Vanilla Javascript plugin to provide simple yet fully customisable web notifications using Web Notifications API.


## Como usar?

1 - Baixe o screamer-js [aqui](https://github.com/willianjusten/screamer-js/archive/master.zip).
2 - Adicione o js na sua pagina.
3 - Em um arquivo js separado ou numa tag script na própria pagina coloque:

```Javascript
var options = {
    'title': 'Hello',
    'body': 'World!',
    'icon': 'img.png',
    'fade': 1000
}
var scream = new Screamer(options); // Inicializa o screamer com as opções de notificação
scream.notify(); // Executa a notificação
```

4 - Pronto! Agora você terá uma notificação na sua pagina.


## Opções

As opções do screamer são as seguintes:

- title (string) - Titulo da notificação. (Obrigatório)
- body (string) - Mensagem da notificação.
- icon (string) - Caminho com a imagem da notificação.
- tag (string) - Identificador único para parar notificações duplicadas.
- lang (string) - Linguagem da notificação. (Default: en).
- timeout (integer) - Tempo em milissegundo para esconder a notificação.
- before (function) - Função de callback chamada depois de exibir a notificação.
- after (function) - Função de callback chamada antes de exibir a notificação.


## Queremos ver na prática!

Aqui você pode ver o [Demo](https://willianjusten.com.br/screamer-js/example/) do screamer funcionando :)


## That's all folks!

Espero que você tenha gostado.

[^1]:Hack-day: é um hackaton que acontece para os funcionários na globo.com poderem criar o que quiserem!


Qualquer duvida, deixe nos comentários! :)
