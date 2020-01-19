Title: Minha primeira APP para Smart TVs
Category: Smart TV
Tags: Smart TV, Js, React
Series: Minha primeira APP para Smart TVs
Date: 2019-11-30
cover_image: smart-tv.png
cover_image_by: Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
cover_image_alt: Smart Tv icon

Fala ae, tranquilinho?

Hoje eu estou aqui para mostrar o desenvolvimento de uma app simples para Smart Tv. Como eu havia prometido [neste post](./como-e-o-desenvolvimento-para-smart-tvs.html). Recomendo a leitura, é uma boa introdução.

<!-- PELICAN_END_SUMMARY -->

Tendo a ideia de tentar passar por boa partes dos problemas que temos quando desenvolvemos app para TVs, pensei em vários tipos diferentes de exemplo de apps: galeria de fotos, app de streaming de música, app de streaming de animes (<strike>para ter uma experiência melhor que a sua, Crunchyroll</strike>), ...Porém para ser algo mais rápido e simples, eu tive que me conter 🤪

## O Projeto:

Com isso em mente, a escolha que mais se encaixou nesses requistos foi: **app que simula um catálogo de animes/mangá**. Após essa série de posts, se vocês quiserem, eu faço um mais "real", com request a APIs, player entre outras coisas (_Não se esqueça de comentar!!_). Será um app relativamente simples, porém o post ficará muito logo, é provável que eu quebre o post em mais de um. E lembrando: esse será um projeto web hosted focado para as Smart Tvs da Samung (Tizen) e LG (WebOs).

Nesse projeto nós iremos desde a criação de uma app na sua máquina até você ver ela funcionando na sua TV 😆.

## Ferramentas:

Basicamente nós iremos utilizar essa stack para desenvolver:

-   React
-   Webpack
-   Jest
-   HTML/CSS
-   <strike>Stackoverflow</strike>

Porém, você é livre para escolher a sua, podendo utilizar qualquer framework para desenvolver. Vue.js, React, Flutter, JS Vanilla, são alguns exemplos. Você só não pode esquercer de duas premissas: **compatibilidade** e **performance**! Então vamos fazer essa bagaça funcionar!!!

### Configurando o projeto:

<center>![E la vamos nós](https://media.tenor.com/images/0993a0560293a59c1bee27a37d91696d/tenor.png)<br/><sup>Creditos: google</sup></center>

Aqui é aquela configuração padrao: aquele nosso `create-react-app` básico (se você não tem o _create-react-app_ é só usar o `npm install -g create-react-app`). Com isso, já começamos a ter a nossa estrutura inicial.

```bash
$ create-react-app my-first-smart-tv-app
```

Nota: _Para fins práticos e educacionais, eu não irei otimizar a nossa app ao máximo, me atentarei para o funcionamento básico de uma app._

Continuando, agora está na hora de adicionar o babel e o webpack, segue os comandos:

```bash
# Webpack
$ yarn add -D webpack webpack-cli webpack-dev-server html-webpack-plugin html-loadert
# babel
$ yarn add -D @babel/core babel-loader @babel/preset-env @babel/preset-react babel-preset-es2015
# Sass/css
$ yarn add -D sass-loader node-sass css-loader mini-css-extract-plugin

```

É necessário fazer algumas configurações para o funcionamento do webpack/babel após a instalação, como eu mexi em vários arquivos, [aqui está o commit com essas modificações](https://github.com/paulopotter/my-first-smart-tv-app/commit/6a5b5f4).

Com isso nós já temos a estrutura da nossa APP.

### Começando o desenvolvimento:

Antes que eu me esqueça, estarei postando essa [app no github](https://github.com/paulopotter/my-first-smart-tv-app), com isso se você quiser apenas o resultado final, estará tudo documentado lá.

Agora vamos começar a codar de verdade, para isso vamos fazer um request para a API que vai nos entregar os dados que a gente precisa, para isso vamos utilizar o [Jikan](https://jikan.moe/?ref=public-apis). O Jikan é uma API não oficial do [My Anime List](https://myanimelist.net), ela é bem completinha para o que iremos fazer 😆. E para ele existe um _wrapper_ em js ([jikanjs](https://github.com/zuritor/jikanjs)) para facilitar ainda mais a nossa vida, para instalar basta rodar.

```bash
yarn add jikanjs
```

Com isso já temos acesso a api, você pode fazer um teste colocando no `App.js` o seguinte trecho de código:

```js
render() {
  jikanjs
  .loadSeasonLater()
  .then((response) => {
      response.anime.forEach(element => {
          console.log(`${element.mal_id}: ${element.title} - ${element.image_url} - ${element.type}`);
      })
  }).catch((err) => {
      console.error(err); // in case a error happens
  });

  return <h1> Hello World :) </h1>;
}
```

Abra o seu console e você verá a resposta do servidor.

Vamos colocar esses dados na tela, e para isso vamos criar uma estrutura HTML:

```jsx

tmpl(anime){
  const {image_url, title, mal_id, type} = anime

  return (
    <div className="poster-wrapper" id={mal_id} key={mal_id}>
      <figure>
        <span>{type}</span>
        <img src={image_url} alt={title} />
        <p>{title}</p>
      </figure>
    </div>
  )

}

```

e depois vamos fazer o request, para isso vamos adicionar o `state` e o `componentDidMount`:

```jsx
constructor(props) {
  super(props)
  this.state = {
      animes: []
  }
}

componentDidMount() {
  let animes = []
  jikanjs
  .loadSeasonLater()
  .then((response) => {
      response.anime.forEach(element => {
          animes.push(element);
      })
      this.setState({ animes })
  }).catch((err) => {
      console.error(err); // in case a error happens
  });
}
```

E agora vamos adicionar no `render` o conteúdo.

```jsx
render() {
    let animes = this.state.animes;
    return animes.map((anime) => (anime.type === 'TV' ? this.tmpl(anime) : null))
}
```

Pronto, com isso já temos todos os itens sendo exibidos na página!

### Vamos passar a primeira maquiagem:

A ideia aqui é só tornar a nossa visualização melhor, não tem muita regra e nem adicionei um pré-processador


```css
body {
  background-color: #0f0f0f;
  color: #f1f1f1;
}

.poster-wrapper {
  display: inline-block;
  text-align: center;
  width: 310px;
}

.poster-wrapper--active {
  outline: 1px solid #f1f1f1;
}
```


### Test, Jest everywhere...

Nós não podemos esquecer de fazer os testes da nossa app (_ou de qualquer código que façamos_), para isso vamos instalar o jest:

```bash
yarn add -D jest babel-jest enzyme jest-environment-enzyme jest-enzyme enzyme-adapter-react-16 identity-obj-proxy
yarn jest --init
```

na linha 2 a gente cria a configuração inicial do jest automaticamente, é só seguir a sequência `jsdom, y, y`, com isso ele cria um arquivo chamado `jest.config.js`. Nele faça a modificação nas linhas 82, 129, 135 e 144:

```js
moduleNameMapper: { // 82
  "\\.(css|sass)$": "identity-obj-proxy",
},
setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"], // 129
testEnvironment: "enzyme", // 135
testMatch: [ // 144
  "**/*.test.js",
],
```

Também precisamos criar o arquivo `src/setupTest.js` e dentro dele colocar:

```js
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
```

Com isso só falta alterar o nosso `package.json` para rodar os testes e coverage:

```json
{
  ...
  scripts: {
      ...
      "test": "jest",
      "test:coverage": "jest --coverage"
  }
}
```

Também adicionei o ESLint, para ver como ficou, olhe [esse commit](https://github.com/paulopotter/my-first-smart-tv-app/commit/853e5bf).

Agora vamos fazer o nosso teste passar


## Navegação

Para fazer a navegação, eu vou adicionar uma classe para indicar a seleção:

```jsx
 tmpl(anime, i) {
    [...]
      <div className={`poster-wrapper ${this.state.activeItem === i ? 'poster-wrapper--active': null}`} id={mal_id} key={mal_id}>
    [...]
  }

  render() {
    [...]
    return animes.map((anime, i) => (anime.type === 'TV' ? this.tmpl(anime, i) : null))
    [...]
  }
```

e agora a gente ouve os eventos do teclado:

```jsx
onKeyDown(e) {
    const { activeItem, animes } = this.state
    let newActiveItem = activeItem
    switch (e.keyCode) {
      case 37: // left
        if (activeItem !== 0) {
          newActiveItem -= 1
        }
        break

      case 39: // right
        if (activeItem < animes.length) {
          newActiveItem += 1
        }
        break

      case 40: // down
        if (activeItem < animes.length) {
          if (activeItem + 4 > animes.length) {
            newActiveItem = animes.length
          } else {
            newActiveItem += 4
          }
        }
        break
      case 38: // up
        if (activeItem < animes.length) {
          if (activeItem - 4 < 0) {
            newActiveItem = 0
          } else {
            newActiveItem -= 4
          }
        }
        break
      default:
        break
    }
    this.setState({
      activeItem: newActiveItem
    })
  }
```

para essa função funcionar a gente ainda precisa adicionar as seguintes linhas:

```js
constructor(props) {
  [...]
  this.onKeyDown = this.onKeyDown.bind(this)
}
componentDidMount() {
  [...]
    this.enableKeyEvent()
  }

  componentWillUnmount() {
    this.disableKeyEvent()
  }

  enableKeyEvent() {
    document.addEventListener('keydown', this.onKeyDown, true)
  }

  disableKeyEvent() {
    document.removeEventListener('keydown', this.onKeyDown, true)
  }
```

## that`s is it

É isso, para a nossa primeira parte isso já é o suficiente para começar a brincar ( e porque se eu continuar o post vai demorar 3 horas para ser lido :P)
Para ver todos os commits desse post, acesse [essa tag no github](https://github.com/paulopotter/my-first-smart-tv-app/releases/tag/post-1)

No próximo post, nós teremos a continuação dos testes, fix de alguns bugs e criação de algum evento para quando selecionar-mos um item.

Qualquer dúvida, critica ou sugestão utilizem os comentários e até a próxima!!


