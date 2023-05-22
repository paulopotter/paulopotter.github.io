---
id: 57f371b0-7921-43bf-8508-dd328909599d
title: Integrando Notion com Github
created_time: 2023-05-14T02:52:00.000Z
last_edited_time: 2023-05-22T15:04:00.000Z
cover_image: public/images/integrando-notion-com-github/Frame_1_XghZLEg0.png
series: []
date:
  type: string
  string: 2023-05-22 15:26
uri:
  type: string
  string: integrando-notion-com-github
category: []
cover_image_alt: Imagem com a logo da notion + logo github actions
Status: Publicado
_thumbnail: public/images/integrando-notion-com-github/Frame_1_XghZLEg0.png

---

Fala pessoa, como cê tá?

Sim, o blog não morreu 😂, eu só não tenho conseguido escrever nada. Por mais que meus posts sejam como especial de natal, que só aparece uma vez por ano e não necessariamente é tão bom 🤣🤣.

Eu tenho estado muito ocupado e acabo não conseguido parar pra escrever, principalmente pela forma que eu preciso pra escrever. Meu blog é feito com NextJS e hospedado via Github pages e por isso, eu preciso ou estar no meu pc + escrever + realizar o build e postar ou baixar o projeto + instalar dependências + escrever + realizar o build e então postar. O que aumenta o “custo” na hora de escrever (*Resumindo, da preguiça!*).

<!-- START_SUMMARY -→

Mas como o titulo do post da o spoiler, eu descobri uma forma de facilitar a minha criação de post utilizando o poder do Notion, sem tirar a liberdade que eu possuo em ter o meu blog feito por mim e hospedado no Github pages.

<!-- END_SUMMARY -→

Eu tenho trabalhado muito voltado ao DX ( e esse assunto já está na lista de posts pra escrever ) mas eu mesmo não faço isso pra mim ( o clássico “_em casa de ferreiro, o espeto é de pau_” ).

## Conhecendo as ferramentas

- [**Notion**](https://notion.so)

	Onde eu pretendo escrever e gerenciar os posts do meu blog.

	_Se você não conhece o_ [_Notion_](https://notion.so) _eu recomendo, é uma grande ferramenta que ajuda em vários pontos da minha vida._

- [**Github**](https://github.com) (Pages e Actions)

	Hoje eu já hospedo o meu blog via Github Pages, visto que o blog é estático e finalmente vou utilizar o Github Actions para fazer o build e o deploy do blog.

- [**Next JS**](https://nextjs.org/)

	Para gerar os estáticos eu fiz o meu blog inteiro utilizando o Next.

## Começando pelo o começo

Eu, a um tempo, estava incomodado de não ter criado uma pipeline pra fazer os testes e o build/deploy do meu blog, mas mais incomodado ainda em não estar postando com frequência, principalmente porque hoje para mim é cansativo escrever um post.

Hoje estou mais acostumado com o Gitlab CI, visto que na Globo usamos o Gitlab. Eu já conhecia o Github Actions, mas nunca havia mexido. Então acabava postergando o aprendizado e a utilização do Github actions. 

Em um dado momento, dado a praticidade de utilizar o Notion, eu acabei me perguntado se não era possível integrar ele com o meu Blog, para facilitar o gerenciamento dos posts e assim me incentivar a escrever mais ( ainda mais porque eu to cheio de ideias de post mas sem saco de passar pelo o processo de escrita que possuo hoje ).

Com isso, acabei encontrando uma action para o Github, que faz o a integração com o Notion, porém eu tive uma certa dificuldade para configurá-lo 😞, a documentação dele foi a melhor que eu achei dessas actions, porém já está meio desatualizada e não tem algumas infos importantes, que eu quebrei a cabeça para entender.

Chega de história, vamos para a ação!

## Notion

Para facilitar a visualização, vamos começar adaptando o Notion para esperar a integração com o Github, para isso vamos criar uma pagina de database e nela vai ficar listada todos os posts que serão publicados no blog. Então coloque as propriedade que você quiser, no meu caso ficou assim: 

![Print da tela do database do notion com as colunas: Title, created_at, Status, Category](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d439790a-fcdc-4311-b2d1-286646825697/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230522T152643Z&X-Amz-Expires=3600&X-Amz-Signature=8c6f84fdbcb9306659249474f151940120597be1ed9242efb2a97a5fc93e484e&X-Amz-SignedHeaders=host&x-id=GetObject)

_Os campos podem ser quais você quiser, porem é_ _**obrigatório**_ _possuir o campo “status” (ou outro que faça o mesmo trabalho, que você entenderá mais a frente)._ 

Com essa tabela criada, já possuímos uma estrutura onde podemos criar todos os nossos post e, de brinde, criar status onde você pode saber se já está postado, escrevendo ou é apenas uma ideia.

### Iniciando a integração

- Agora para preparar o terreno para integração vamos adicionar uma conexão, nas opções da tabela, vá até gerenciamento de conexão (Manage connections)

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9cae4ff0-b558-4151-9420-31e5b3ef8dba/Screenshot_2023-05-13_at_22.15.11.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230522T152643Z&X-Amz-Expires=3600&X-Amz-Signature=59d2d66f276332c11ef3c93c146c9dc8b9e04b2d241a8eb33195c7119493e560&X-Amz-SignedHeaders=host&x-id=GetObject)

- Na janela que abrir, procure no fim da tela o campo: _Developer or manager integrations_

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b7490e14-1225-450c-bec9-994eb3381989/Screenshot_2023-05-13_at_22.15.33.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230522T152643Z&X-Amz-Expires=3600&X-Amz-Signature=39cc6eeb75636a01d7da5076d62c428fffe82444116f0f48c29d9e028034e53f&X-Amz-SignedHeaders=host&x-id=GetObject)

- Ele vai te redirecionar até a area de integrações de api do Notion

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f3b965f3-b88f-4e8d-98cc-42ca7418be0c/Screenshot_2023-05-13_at_22.15.56.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230522T152643Z&X-Amz-Expires=3600&X-Amz-Signature=2dbfdc10d361acb0f189e69576aa37d374f00a65a33d526aa472d5602a0014c6&X-Amz-SignedHeaders=host&x-id=GetObject)

- Clique para adicionar uma nova integração ( New Integration ) e preencha o campo de Name com o nome que voce quiser dar, uma imagem para você saber o que você está associando e qual o workspace do notion essa api vai ser associada.

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/755a0360-1355-49ab-a414-e5fb653b01b4/Screenshot_2023-05-13_at_22.17.13.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230522T152643Z&X-Amz-Expires=3600&X-Amz-Signature=d7c7332ea894ad537d5a6e0b97a168bbfc6d0406ac3488a9dc47d9b01b23a8f4&X-Amz-SignedHeaders=host&x-id=GetObject)

Após criado ele irá gerar uma **secret key,** guarde ela que iremos utiliza-la mais a frente. (Você consegue acessar ela a hora que você quiser, não se preocupe).

- Depois disso, voltamos para a nossa tabela e acessamos a configuração dela, e no campo de conexão, a gente adiciona a  integração que acabamos de criar.

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8fea011f-4cf6-4d5d-a718-75598d883452/Screenshot_2023-05-13_at_22.18.47.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230522T152643Z&X-Amz-Expires=3600&X-Amz-Signature=7c58e9bb9e80266b27afeffdb8b49dcdf266aaf359d946016ec6a57d045b154d&X-Amz-SignedHeaders=host&x-id=GetObject)

Pronto! A parte referente ao Notion foi finalizada 😄

## Github actions (Gh Actions)

Eu não vou mostrar uma config completa e/ou explicar como funciona o Github Actions, até porque eu ainda estou aprendendo/ me entendendo com ele. 

### Environments

Vamos criar logo as nossas variáveis de ambiente para ser utilizada na pipeline. 

-  Vá até as configurações do seu projeto e acesse o menu “**Environments**”, 

Nessa tela você terá duas formas de criar variáveis de ambiente, uma secreta e outra aberta.

-  Na parte de criação das variáveis secretas, nós vamos criar duas: **NOTION_ROOT_PAGE_ID** e **NOTION_TOKEN**,  onde os valores deles serão a url da database do notion e a **secret key** obtido na explicação do Notion, respectivamente.

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/567d71da-3a4a-4b18-bd08-8c43347dca45/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230522T152643Z&X-Amz-Expires=3600&X-Amz-Signature=87f91bdf5e03d2eb1357789baf12da3d42ce895b2d02e7fd3aad4cec32a805e9&X-Amz-SignedHeaders=host&x-id=GetObject)

-  Na parte da criação das variáveis, eu preferi criar 3 variáveis, para me dar a liberdade de não ter que ficar mexendo no código toda hora que eu precisar alterar alguma info que a action usa para tratar os dados do notion. Essas variáveis são: **FILTER_PROP**, **FILTER_VALUES** e  **POST_URI**. Onde:

	- **FILTER_PROP** fica o nome do campo onde eu quero que o Github filtre para saber qual o post ele terá que publicar.

	- **FILTER_VALUES** fica o valor do campo que, quando um post tiver esse valor no campo de filtro, será o indicativo para o Github para saber que é o post ele terá que publicar.

	- **POST_URI** é o nome do campo onde ele vai usar o valor final (como o nome do post, por exemplo) para ajudar a montar o path de arquivos.

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a644c908-9438-4510-b947-d8981a2e5d03/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230522T152643Z&X-Amz-Expires=3600&X-Amz-Signature=739ecbe5e9fed33fcedb374e361559146333299adff74e534c5235d314d6c4e4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Criando seu job / action:

Pesquisando, acabei caindo na action [Notion jam](https://github.com/victornpb/notion-jam), que pega os dados e gera um arquivo markdown. Também peguei outras actions, o [git auto commit action](https://github.com/stefanzweifel/git-auto-commit-action) e o [GitHub push action](https://github.com/ad-m/github-push-action) para poder fazer um commit e puxar o arquivo criado na branch que eu to usando.

Para facilitar a explicação, eu vou colar o meu arquivo de actions aqui 

```yaml
name: Sync Notion pages to posts

on:
  schedule:
    - cron: '0 13 * * *' # daily

  workflow_dispatch:

jobs:
  get_and_commit_notions_posts:
    runs-on: ubuntu-latest
    environment: github-pages
    steps:
      - uses: actions/checkout@v3

      - name: notion-jam
        uses: victornpb/notion-jam@v0.0.13
        with:
          NOTION_SECRET: ${{ secrets.NOTION_TOKEN}}
          NOTION_DATABASE: ${{ secrets.NOTION_ROOT_PAGE_ID }}
          FILTER_PROP: ${{ vars.FILTER_PROP }}
          FILTER_VALUES: ${{ vars.FILTER_VALUES }}
          ARTICLE_PATH: src/posts/${{ vars.POST_URI }}.md
          ASSETS_PATH: public/images/${{ vars.POST_URI }}/
          PARALLEL_PAGES: 25
          PARALLEL_DOWNLOADS_PER_PAGE: 3
          DOWNLOAD_IMAGE_TIMEOUT: 30

      - name: Save changes
        uses: stefanzweifel/git-auto-commit-action@v4
        with:
          commit_message: 'docs: add new post'
      - uses: ad-m/github-push-action@master
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          branch: ${{ github.ref }}
```

[Link para o action atualizado](https://github.com/paulopotter/paulopotter.github.io/blob/nextjs/.github/workflows/notion.yml)

## Bonus track

Para facilitar ainda mais a minha vida, eu consegui criar um template na hora de criar um post, dentro do notion, onde ele já preenche alguns campos para mim. Além de criar botões de criação rápida de post, onde ele já preenche alguns dados de acordo com o conteúdo do botão.

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d16fe037-70ef-46ed-b684-c8fc02d3e6df/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230522T152643Z&X-Amz-Expires=3600&X-Amz-Signature=240906ada794d561fdeaa79da41774c51366d93e9cde493866a84983860bb092&X-Amz-SignedHeaders=host&x-id=GetObject)

## Thats all folks

Eu ainda estou descobrindo o que eu posso fazer no Notion e isso refletir no meu Blog, ainda não sei se todas as funcionalidades que eu tenho no blog eu consigo criar via o Notion. Talvez, posts mais complexos ainda precisem ser manuais.

Ainda tenho como meta, conseguir ver uma forma de publicar nas redes sociais automaticamente, talvez até via Github actions também, mais infelizmente não vai ser dessa vez.

É isso, espero que esse post te ajude em algo 😃.

E com muito orgulho, esse é o primeiro post que eu fiz a partir dessa integração! Espero que a partir de agora eu consiga manter o blog mais atualizado, graças a essa facilidade.

Valeu, Falow, até a próxima!
