---
Title: Como fazer reticências(ellipsis) apenas com css
Category: Css, Tips
Date: "2017-09-11"

---

Digamos que você tenha uma `DIV` com um texto grande e a mesma tem que ter uns `100px`, porém você não controla/vai ficar controlando o texto que vai entrar.

```css
div {
   // ...
   text-overflow: ellipsis;
   overflow: hidden;
   white-space: nowrap;
}
```

_Nota: isso só funciona para uma linha, para mais de uma eu ainda estou pesquisando como é a melhor forma de fazer em css!_
