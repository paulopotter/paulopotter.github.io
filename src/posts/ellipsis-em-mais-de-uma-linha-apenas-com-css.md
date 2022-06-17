---
Title: 'Ellipsis em mais de uma linha apenas com css'
Category: Css, Tips
Date: "2021-02-16"
cover_image: ./images/reticências.jpg
cover_image_by: Imagem retirada do google
cover_image_alt: Reticências
cover_image_link: https://www.google.com/search?q=reticencias&tbm=isch&ved=2ahUKEwjsqbSd_u7uAhVVMrkGHf-GCdUQ2-cCegQIABAA&oq=reticencias&gs_lcp=CgNpbWcQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgQIABAeMgQIABAeUJoLWJoLYOkNaABwAHgAgAFqiAFqkgEDMC4xmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=bggsYOy6MtXk5OUP_42mqA0&bih=981&biw=2520#imgrc=msXkVi-Jn8jP0M
---

Fala minha galera, hoje a dica é rápida.

Complementando o [post feito antes](./como-fazer-reticenciasellipsis-apenas-com-css.html), onde eu mostrava o ellipsis em uma linha, essa dica é para quem utiliza [sass](https://sass-lang.com/guide).
Com ele, você conseguirá fazer ellipsis em mais de uma linha, facilitando muito quando a reticência tem que ficar numa caixa e não em uma linha.

O mixin é esse:

```sass
@mixin multiline-ellipsis($font-size: 20px, $line-height: 1.5, $lines-to-show: 10, $background: transparent) {
  background: $background;
  display: block;
  display: -webkit-box;
  max-height: $font-size*$line-height*$lines-to-show;
  font-size: $font-size;
  line-height: $line-height;
  -webkit-line-clamp: $lines-to-show;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  text-overflow: -o-ellipsis-lastline;
}
```

Exemplo:

<iframe height="400" style="width: 100%;" scrolling="no" title="Reticencias multiline" src="https://codepen.io/paulooliveira/embed/ZEBKbqw?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/paulooliveira/pen/ZEBKbqw">
  Reticencias multiline</a> by Paulo Oliveira (<a href="https://codepen.io/paulooliveira">@paulooliveira</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


Essa dica me foi passada pelo Carlos Estrela.
