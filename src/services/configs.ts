const IS_DEV_MODE = process.env.NODE_ENV !== 'production';

const basic = {
  TITLE: 'Um dev qualquer || Paulo Oliveira',
  SITE_NAME: 'Um dev qualquer',
  SITE_NAME_SUBTITLE: 'Paulo Oliveira',
  SITE_DESCRIPTION: 'Blog pessoal onde mostro um pouco do meu aprendizado.',
  SITE_URL: `${IS_DEV_MODE ? 'http://local.' : 'https://'}umdevqualquer.com.br${
    IS_DEV_MODE ? ':3000' : ''
  }`,
  DEFAULT_LANG: 'pt-BR',
};

const HASH_GRAVATAR = 'ac7d3bd9cc7064b78ad1a2472cc4d22e';
const author = {
  AUTHOR: 'Paulo Oliveira',
  AUTHOR_EMAIL: 'paulo@umdevqualquer.com',
  AUTHOR_IMG: `https://www.gravatar.com/avatar/${HASH_GRAVATAR}`,
  SOCIAL: [
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
      url: 'https://twitter.com/o_umdevqualquer',
    },
    {
      name: 'Cal',
      url: 'https://app.cal.com/umdevqualquer',
    },
  ],
};

const socialShare = {
  TWITTER_SITE: '@o_umdevqualquer',
  TWITTER_CREATOR: '@o_umdevqualquer',
  TWITTER_CARD: 'summary_large_image',
};

const comments = {
  DISQUS_SITENAME: 'umdevqualquer',
};

const menu: {
  MENU_LINKS: Record<string, string>;
} = {
  MENU_LINKS: {
    Home: '/',
    //  'Labs': '/labs',
    'Dicas / Snippets': '/tips',
    //  'Talks / Palestras': '/talks',
    'Sobre Mim': '/author',
    'Recomendações de compra': '/sales',
    'Faça seu orçamento!': '/estimate',
  },
};

const rss = {
  FEED_ALL_RSS: 'rss/all.xml',
  FEED_ALL_ATOM: 'rss/all.atom.xml',
  FEED_DOMAIN: basic.SITE_URL,
};

const metrics = {
  GA_CODE: IS_DEV_MODE ? 'G-JJ3BCWYTFE' : 'G-JWYBRTREFC',
  NEWRELIC_AGENT_ID: IS_DEV_MODE ? 601336993 : 601335062,
};

const date_config = {
  FULL_DATE_DEFAULT_FORMAT: 'YYYY-MM-DD HH:mm:ss',
  DATE_DEFAULT_FORMAT: 'YYYY-MM-DD',
  POST_DATE_FORMAT: 'DD MMM YYYY',
};

export default {
  IS_DEV_MODE,
  ...basic,
  ...author,
  ...socialShare,
  ...comments,
  ...menu,
  ...rss,
  ...metrics,
  ...date_config,
};
