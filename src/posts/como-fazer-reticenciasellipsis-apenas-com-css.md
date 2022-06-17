---
Title: Como fazer reticências(ellipsis) apenas com css
Category: Css, Tips
Date: "2017-09-11"
cover_image: ./images/reticências.jpg
cover_image_by: Imagem retirada do google
cover_image_link: https://www.google.com/search?q=reticencias&tbm=isch&ved=2ahUKEwjsqbSd_u7uAhVVMrkGHf-GCdUQ2-cCegQIABAA&oq=reticencias&gs_lcp=CgNpbWcQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgQIABAeMgQIABAeUJoLWJoLYOkNaABwAHgAgAFqiAFqkgEDMC4xmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=bggsYOy6MtXk5OUP_42mqA0&bih=981&biw=2520#imgrc=msXkVi-Jn8jP0M
cover_image_alt: Reticências

---

Fala pessoal, como é que cês tão?! 😜


Hoje eu to vindo aqui para mostrar como fazer para dar um crop no texto e colocar reticências apenas com CSS!
<!-- PELICAN_END_SUMMARY -->

Sabe quando voce precisa que um texto caiba num espaço e não pode ultrapassar-lo, você não quer colocar js para diminuir a fonte,
seu media-query também não está funcionando, então você acaba apelando para dar um _ellipsis_ no seu texto, isso nada mais é que,
quando o texto ultrapassar um determinado tamanho, ele fica com reticências!
Um bom exemplo disso é o *veja mais...* colocado em alguns blogs.

Mas vamos parar de papo e...

## ... mãos a obra!

Digamos que você tenha uma `DIV` com um texto grande e a mesma tem que ter uns `100px`, porém você não controla/vai ficar controlando o texto que vai entrar.

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/paulopotter/embed/oGvYdg?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/paulopotter/pen/oGvYdg">
  Untitled</a> by Paulo Vitor (<a href="https://codepen.io/paulopotter">@paulopotter</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

_fonte: [http://slipsum.com/ipsum/](http://slipsum.com/ipsum/)_

Ao colocar o seguinte trecho de código, a sua div vai ganhar reticências...

```css
div {
   ...
   text-overflow: ellipsis;
   overflow: hidden;
   white-space: nowrap;
}
```

e veja como fica:

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/paulopotter/embed/NaKbBX?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/paulopotter/pen/NaKbBX">
  Untitled</a> by Paulo Vitor (<a href="https://codepen.io/paulopotter">@paulopotter</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

_Nota: isso só funciona para uma linha, para mais de uma eu ainda estou pesquisando como é a melhor forma de fazer em css!_


Vlw pessoal, até a proxima!

Duvidas, criticas, alternativas deixem nos comentários!
