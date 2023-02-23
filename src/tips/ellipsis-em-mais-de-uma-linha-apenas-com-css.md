---
Title: 'Ellipsis em mais de uma linha apenas com css'
Category: Sass, Tips
Date: "2021-02-16"
---

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

*Essa dica me foi passada pelo Carlos Estrela.*
