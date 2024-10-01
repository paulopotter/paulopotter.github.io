---
id: 10b8f337-f922-8020-b239-dadb95389efb
title: Sleep com Javascript
created_time: 2024-09-24T13:08:00.000Z
last_edited_time: 2024-09-24T13:15:00.000Z
category:
  - JS
date: 2024-09-24 13:15
Status: Publicado
uri: sleep-com-javascript

---

As vezes precisamos fazer um sleep para “travar” uma execução e ter tempo para testar algo.

Para isso, podemos utilizar essa função em JavaScript

```javascript
const sleep = ms => new Promise(r => setTimeout(r, ms));
```

Ou em TypeScript

```typescript
const sleep = (ms: number): Promise<void> => new Promise((r) => setTimeout(r, ms));
```

E para utilizar não esqueça de colocar o `await` quando chamar.

Referência: [Stack Overflow](https://stackoverflow.com/a/39914235)
