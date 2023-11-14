---
id: 57f371b0-7921-43bf-8508-dd328909599d
title: Integrando Notion com Github
created_time: 2023-05-14T02:52:00.000Z
last_edited_time: 2023-05-27T16:50:00.000Z
cover_image: public/images/integrando-notion-com-github/Frame_1_IeNLNpP5.png
Date: null
series: []
date: 2023-05-27 16:50
uri: integrando-notion-com-github
category:
  - Produtividade
  - Automação
cover_image_alt: Imagem com a logo da notion + logo github actions
Status: Publicado
_thumbnail: public/images/integrando-notion-com-github/Frame_1_IeNLNpP5.png

---

Fala pessoa, como cê tá?

Sim, o blog não morreu 😂, eu só não tenho conseguido escrever nada. Por mais que meus posts sejam como especial de natal, que só aparece uma vez por ano e não necessariamente é tão bom 🤣🤣.

Eu tenho estado muito ocupado e acabo não conseguido parar pra escrever, principalmente pela forma que eu preciso pra escrever. Meu blog é feito com NextJS e hospedado via Github pages e por isso, eu preciso ou estar no meu pc + escrever + realizar o build e postar ou baixar o projeto + instalar dependências + escrever + realizar o build e então postar. O que aumenta o “custo” na hora de escrever (*Resumindo, da preguiça!*).

<!-- START_SUMMARY -->

Mas como o titulo do post da o spoiler, eu descobri uma forma de facilitar a minha criação de post utilizando o poder do Notion, sem tirar a liberdade que eu possuo em ter o meu blog feito por mim e hospedado no Github pages.

<!-- END_SUMMARY -->

Eu tenho trabalhado muito voltado ao DX ( e esse assunto já está na lista de posts pra escrever ) mas eu mesmo não faço isso pra mim ( o clássico “*em casa de ferreiro, o espeto é de pau*” ).

## Conhecendo as ferramentas

*   [**Notion**](https://notion.so/)

    Onde eu pretendo escrever e gerenciar os posts do meu blog.

    *Se você não conhece o* [*Notion*](https://notion.so/) *eu recomendo, é uma grande ferramenta que ajuda em vários pontos da minha vida.*

*   [**Github**](https://github.com/) (Pages e Actions)

    Hoje eu já hospedo o meu blog via Github Pages, visto que o blog é estático e finalmente vou utilizar o Github Actions para fazer o build e o deploy do blog.

*   [**Next JS**](https://nextjs.org/)

    Para gerar os estáticos eu fiz o meu blog inteiro utilizando o Next.

## Começando pelo o começo

Eu, a um tempo, estava incomodado de não ter criado uma pipeline pra fazer os testes e o build/deploy do meu blog, mas mais incomodado ainda em não estar postando com frequência, principalmente porque hoje para mim é cansativo escrever um post.

Hoje estou mais acostumado com o Gitlab CI, visto que na Globo usamos o Gitlab. Eu já conhecia o Github Actions, mas nunca havia mexido. Então acabava postergando o aprendizado e a utilização do Github actions.

Em um dado momento, dado a praticidade de utilizar o Notion, eu acabei me perguntado se não era possível integrar ele com o meu Blog, para facilitar o gerenciamento dos posts e assim me incentivar a escrever mais ( ainda mais porque eu to cheio de ideias de post mas sem saco de passar pelo o processo de escrita que possuo hoje ).

Com isso, acabei encontrando uma action para o Github, que faz o a integração com o Notion, porém eu tive uma certa dificuldade para configurá-lo 😞, a documentação dele foi a melhor que eu achei dessas actions, porém já está meio desatualizada e não tem algumas infos importantes, que eu quebrei a cabeça para entender.

Chega de história, vamos para a ação!

## Notion

Para facilitar a visualização, vamos começar adaptando o Notion para esperar a integração com o Github, para isso vamos criar uma pagina de database e nela vai ficar listada todos os posts que serão publicados no blog. Então coloque as propriedade que você quiser, no meu caso ficou assim:

![Print da tela do database do notion com as colunas: Status, title, uri, date, category e series](public/images/integrando-notion-com-github/Untitled_eiWcVbHV.png)

*Os campos podem ser quais você quiser, porem é* ***obrigatório*** *possuir o campo “status” (ou outro que faça o mesmo trabalho, que você entenderá mais a frente).*

> *Spoiler*: Até então, eu usava o campus “*Status*” como um do tipo `select` e depois eu descobri que já existia o tipo `status` , o que facilita muito a utilização mas que me deu muita dor de cabeça para resolver  isso.

Com essa tabela criada, já possuímos uma estrutura onde podemos criar todos os nossos post e, de brinde, criar status onde você pode saber se já está postado, escrevendo ou é apenas uma ideia.

### Iniciando a integração

*   Agora para preparar o terreno para integração vamos adicionar uma conexão, nas opções da tabela, vá até gerenciamento de conexão (Manage connections)

![](public/images/integrando-notion-com-github/Screenshot_2023-05-13_at_22.15.11_MrwGbdGu.png)

*   Na janela que abrir, procure no fim da tela o campo: *Developer or manager integrations*

![](public/images/integrando-notion-com-github/Screenshot_2023-05-13_at_22.15.33_steevlxE.png)

*   Ele vai te redirecionar até a area de integrações de api do Notion

![](public/images/integrando-notion-com-github/Screenshot_2023-05-13_at_22.15.56_ov6UkFNN.png)

*   Clique para adicionar uma nova integração ( New Integration ) e preencha o campo de Name com o nome que voce quiser dar, uma imagem para você saber o que você está associando e qual o workspace do notion essa api vai ser associada.

![](public/images/integrando-notion-com-github/Screenshot_2023-05-13_at_22.17.13_Phkhc4Mp.png)

Após criado ele irá gerar uma **secret key,** guarde ela que iremos utiliza-la mais a frente. (Você consegue acessar ela a hora que você quiser, não se preocupe).

*   Depois disso, voltamos para a nossa tabela e acessamos a configuração dela, e no campo de conexão, a gente adiciona a  integração que acabamos de criar.

![](public/images/integrando-notion-com-github/Screenshot_2023-05-13_at_22.18.47_ceLhH8eS.png)

Pronto! A parte referente ao Notion foi finalizada 😄

## Github actions (Gh Actions)

Eu não vou mostrar uma config completa e/ou explicar como funciona o Github Actions, até porque eu ainda estou aprendendo/ me entendendo com ele.

### Environments

Vamos criar logo as nossas variáveis de ambiente para ser utilizada na pipeline.

*   Vá até as configurações do seu projeto e acesse o menu “**Environments**”,

Nessa tela você terá duas formas de criar variáveis de ambiente, uma secreta e outra aberta.

*   Na parte de criação das variáveis secretas, nós vamos criar duas: **NOTION\_ROOT\_PAGE\_ID** e **NOTION\_TOKEN**,  onde os valores deles serão a url da database do notion e a **secret key** obtido na explicação do Notion, respectivamente.

![](public/images/integrando-notion-com-github/Untitled_PZuYnY8i.png)

*   Na parte da criação das variáveis, eu preferi criar 3 variáveis, para me dar a liberdade de não ter que ficar mexendo no código toda hora que eu precisar alterar alguma info que a action usa para tratar os dados do notion. Essas variáveis são: **FILTER\_PROP**, **FILTER\_VALUES** e  **POST\_URI**. Onde:

    *   **FILTER\_PROP** fica o nome do campo onde eu quero que o Github filtre para saber qual o post ele terá que publicar.

    *   **FILTER\_VALUES** fica o valor do campo que, quando um post tiver esse valor no campo de filtro, será o indicativo para o Github para saber que é o post ele terá que publicar.

    *   **POST\_URI** é o nome do campo onde ele vai usar o valor final (como o nome do post, por exemplo) para ajudar a montar o path de arquivos.

![](public/images/integrando-notion-com-github/Untitled_9MEIPqCG.png)

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

![](public/images/integrando-notion-com-github/Untitled_eYlw5f4q.png)

## Problemas e aprendizados

### Não suporte a certas propriedades

Como eu havia dito antes, eu resolvi trocar o tipo do campo “Status” de `select` para `status` e com isso a minha pipeline parou de funcionar e não só isso a “Categoria” não estava sendo exibida (e depois eu descobri que as “Series” também não).

Depois de muito bater a cabeça eu descobri que a action “notion-jam” não dava suporte para os tipo `relation` (que são o caso dos campos “categoria” e “series”) e `status` o que fazia com que metade da preparação que eu havia criado, ir pelo o ralo a baixo.

Então resolvi fazer um [fork da action](https://github.com/paulopotter/notion-jam) e adicionar o suporte eu mesmo para esses tipos e como adicional eu também corrigi uma parada que me incomodava quando eu usava o tipo `formula`.

Já abri um [Pull Request para a action original](https://github.com/victornpb/notion-jam/pull/5) com essas mexidas, mas enquanto ele não aprova, eu estou usando o meu fork para rodar a minha pipeline. Caso você queira usar a minha action (ou usar a original quando já estiver mergeada), recomendo olhar o meu arquivo de action do blog, pois foram adicionados novos campos que eu não coloquei neste post.

Nota adicional: caso você queira usar uma coluna que é uma relação com outra tabela, a outra tabela também precisa ter a integração que fizemos anteriormente. (apenas o passo 5 da integração)

### Dificuldades

Dois pontos que ainda não consegui resolver, mas devo atualizar o post quando descobrir são:

*   que é difícil utilizar tags HTML, pois quando chega via api, chega “encodada”.  E hoje eu utilizo para gerar o resumo da home e do RSS. (Sim, o blog tem RSS).
    Além disso o próprio notion formata o texto, hoje para conseguir usar algumas  tags HTML eu preciso escrever em outro lugar e depois copiar para o notion, para ele manter a tag sem formatar os caracteres.

*   que mesmo se eu não editar um post, ele baixa o post novamente e faz um novo commit. E as vezes isso acaba falhando a pipe.
    Vou precisar fazer um diff para não ficar fazendo commit sem ter novas alterações. Porém não estou conseguindo isso na pipe.

## **That\`s all folks**

Eu ainda estou descobrindo o que eu posso fazer no Notion e isso refletir no meu Blog, ainda não sei se todas as funcionalidades que eu tenho no blog eu consigo criar via o Notion. Talvez, posts mais complexos ainda precisem ser manuais.

Ainda tenho como meta, conseguir ver uma forma de publicar nas redes sociais automaticamente, talvez até via Github actions também, mais infelizmente não vai ser dessa vez.

É isso, espero que esse post te ajude em algo 😃.

E com muito orgulho, esse é o primeiro post que eu fiz a partir dessa integração! Espero que a partir de agora eu consiga manter o blog mais atualizado, graças a essa facilidade.

Valeu, Falow, até a próxima!
