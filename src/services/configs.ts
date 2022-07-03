const CONFIGS = {
  title: 'Um dev qualquer || Paulo Oliveira',

  AUTHOR : 'Paulo Oliveira',
  SITE_BAR_TITLE : 'Um dev qualquer || Paulo Oliveira',
  SITENAME : 'Um dev qualquer',
  SITE_NAME_SUBTITLE : 'Paulo Oliveira',
  SITEDESCRIPTION : 'Blog pessoal onde mostro um pouco do meu aprendizado.',
  SITEURL : '/',
  AUTHOR_SAVE_AS : 'author.html',
  HASH_GRAVATAR : 'cd58d60fac779175c0ab6ac1b912d4b5',
  PATH : 'content',
  DEFAULT_LANG : 'pt-BR',
  TIMEZONE : 'America/Sao_Paulo',
  DEFAULT_DATE_FORMAT : ('%d %b %Y'),
  GZIP_CACHE: true,
  GA_CODE : process.env.NODE_ENV !== 'development' ? 'G-JJ3BCWYTFE' : 'G-JWYBRTREFC',
  FEED_ALL_ATOM : 'feeds/all.atom.xml',
  FEED_DOMAIN : 'https://umdevqualquer.com.br',
  CATEGORY_FEED_ATOM : null,
  TRANSLATION_FEED_ATOM : null,
  AUTHOR_FEED_ATOM : null,
  AUTHOR_FEED_RSS : null,
  SUMMARY_USE_FIRST_PARAGRAPH : true,
  LINKS : [],
  MENU_LINKS : {
      'Home': '/',
    //  'Labs': '/labs',
      'Sobre Mim': '/author',
    //  'Talks / Palestras': '/talks',
  },
  SOCIAL : [
    {
      name: 'Instagram',
      url: 'https://instagram.com/umdevqualquer/',
    },
    {
      name: 'Linkedin',
      url: 'https://linkedin.com/in/paulofrauches/',
    },
    {
      name: 'Github',
      url: 'https://github.com/paulopotter',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/paulofrauches',
    },
  ],
  COVER_IMAGES_PATH : "images",
  STATIC_PATHS : ['images', 'extra/CNAME', 'extra/favicon.png', ],
  EXTRA_PATH_METADATA : {
      'extra/CNAME': {'path': 'CNAME'},
      'extra/favicon.png': {'path': 'favicon.png'},
  },
  SLUGIFY_SOURCE : 'title',
  THEME : './themes/2022_by_me',
  DEFAULT_CATEGORY : 'Sem categoria',
  THEME_STATIC_URL : '/theme',
  STATIC_IMAGES : './images',
  DISQUS_SITENAME : 'umdevqualquer',
  DISQUS_SECRET_KEY : 'XdODToOxeAJ9o3hRoTPjx78PZZm0WcTtowolBCStey0men2ufj9UIXHxuXmhWf74',
  DISQUS_PUBLIC_KEY : 'KQs0QcpVN6AoH9AqAPSGj7qmPQDB7RmGSdvEizPYkEM6452phejHRUSfKkprC5Qi',
}





export default CONFIGS
