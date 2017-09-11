Title: Como fazer reticências(ellipsis) apenas com css
Category: Css
Tags: Css, Tips
Date: 2017-09-11

Fala pessoal, como é que cês tão?! (:P)


Hoje eu to vindo aqui para mostrar como fazer para dar um crop no texto e colocar reticências apenas com CSS!
<!-- PELICAN_END_SUMMARY -->

Sabe quando voce precisa que um texto caiba num espaço e não pode ultrapassar-lo, você não quer colocar js para diminuir a fonte,
seu media-query também não está funcionando, então você acaba apelando para dar um _ellipsis_ no seu texto, isso nada mais é que,
quando o texto ultrapassar um determinado tamanho, ele fica com reticências! 
Um bom exemplo disso é o *veja mais...* colocado em alguns blogs.

Mas vamos parar de papo e...

## ... mãos a obra!

Digamos que você tenha uma `DIV` com um texto grande e a mesma tem que ter uns `100px`, porém você não controla/vai ficar controlando o texto que vai entrar.

<p data-height="265" data-theme-id="0" data-slug-hash="oGvYdg" data-default-tab="html,result" data-user="paulopotter" data-embed-version="2" data-pen-title="oGvYdg" class="codepen">See the Pen <a href="https://codepen.io/paulopotter/pen/oGvYdg/">oGvYdg</a> by Paulo Vitor (<a href="https://codepen.io/paulopotter">@paulopotter</a>) on <a href="https://codepen.io">CodePen</a>.</p>

_fonte: [http://slipsum.com/ipsum/](http://slipsum.com/ipsum/)_

Ao colocar o seguinte trecho de código, a sua div vai ganhar reticências...

```
div {
   ...
   text-overflow: ellipsis;
   overflow: hidden;
   white-space: nowrap;
}
```

e veja como fica:

<p data-height="265" data-theme-id="dark" data-slug-hash="NaKbBX" data-default-tab="html,result" data-user="paulopotter" data-embed-version="2" data-pen-title="NaKbBX" class="codepen">See the Pen <a href="https://codepen.io/paulopotter/pen/NaKbBX/">NaKbBX</a> by Paulo Vitor (<a href="https://codepen.io/paulopotter">@paulopotter</a>) on <a href="https://codepen.io">CodePen</a>.</p>

_Nota: isso só funciona para uma linha, para mais de uma eu ainda estou pesquisando como é a melhor forma de fazer em css!_


Vlw pessoal, até a proxima!

Duvidas, criticas, alternativas deixem nos comentários!

<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>
