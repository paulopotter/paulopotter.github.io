#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'Paulo Oliveira'
SITE_BAR_TITLE = u'[LOCAL] Um dev qualquer'
SITENAME = u'Paulo Oliveira'
SITE_NAME_SUBTITLE = u'Full stack web Developer'
SITEDESCRIPTION = u'Blog pessoal onde mostro um pouco do meu aprendizado.'
SITEURL = 'http://local.umdevqualquer.com.br:8000'
AUTHOR_SAVE_AS = 'author.html'
HASH_GRAVATAR = 'cd58d60fac779175c0ab6ac1b912d4b5'

PATH = 'content'
LOCALE = ('bra', 'pt_BR', 'pt_BR.UTF-8')
DEFAULT_LANG = u'pt-BR'
TIMEZONE = u'America/Sao_Paulo'
DEFAULT_DATE_FORMAT = ('%d %b %Y')
GZIP_CACHE = True
GA_CODE = u'G-JWYBRTREFC'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = 'feeds/all.atom.xml'
FEED_DOMAIN = SITEURL
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None
SUMMARY_USE_FIRST_PARAGRAPH = True

# Blogroll
LINKS = ()

# Social widget
SOCIAL = ()

COVER_IMAGES_PATH = "images"
STATIC_PATHS = ['images', 'extra/CNAME', 'extra/favicon.png', ]

EXTRA_PATH_METADATA = {
    'extra/CNAME': {'path': 'CNAME'},
    'extra/favicon.png': {'path': 'favicon.png'},
}

# Uncomment following line if you want document-relative URLs when developing
SLUGIFY_SOURCE = 'title'
THEME = u'./themes/2022_by_me'
# THEME = u'./themes/made_by_designer'
DEFAULT_CATEGORY = 'Sem categoria'
THEME_STATIC_URL = u'/theme'
STATIC_IMAGES = u'./images'

# Disqus
DISQUS_SITENAME = u'umdevqualquer'
DISQUS_SECRET_KEY = u'XdODToOxeAJ9o3hRoTPjx78PZZm0WcTtowolBCStey0men2ufj9UIXHxuXmhWf74'
DISQUS_PUBLIC_KEY = u'KQs0QcpVN6AoH9AqAPSGj7qmPQDB7RmGSdvEizPYkEM6452phejHRUSfKkprC5Qi'

# Plugins
PLUGIN_PATHS = ['plugins']
PLUGINS = [
    'summary',
    'series',
    'related_posts',
    'pelican-cover-image',
    'readtime',
    'pelican_just_table',
    'linkclass',
    'neighbors',
    'minchin.pelican.plugins.optimize_images',
    # https://github.com/MinchinWeb/minchin.pelican.plugins.optimize_images
    'image_process',  # https://github.com/pelican-plugins/image-process
    # 'gzip_cache',
    'replacer',
]

# Replacer
REPLACES = (
    (u'<img',
     u'<img loading="lazy"'),
)


# Image Process
IMAGE_PROCESS_DIR = "resized"

IMAGE_PROCESS = {
    "article_cover": {
        "type": "responsive-image",
        "sizes": (
            "(max-width: 768px) 30%, "
            "(max-width: 1280) 50%, "
            "(max-width: 1920px) 100%, "
        ),
        "srcset": [
            ("768w", ["resize 30% 30%"]),
            ("1280w", ["resize 80% 80%"]),
            ("1920w", ["resize 100% 100%"]),
        ],
        "default": "1280w"
    },
    "article_thumb": ["scale_in 600 300 True", ],
}


# just Table
JTABLE_SEPARATOR = '|'

# link class

LINKCLASS = (
    ('EXTERNAL_CLASS', 'external-link', ''),
    ('INTERNAL_CLASS', 'internal-link', '')
)

# ReadTime

RELATED_POSTS_MAX = 5
READTIME_WPM = {
    'default': {
        'wpm': 150,
        'min_singular': 'minuto',
        'min_plural': 'minutos',
        'sec_singular': 'segundo',
        'sec_plural': 'segundos'
    }
}

# Markdown Extensions

MARKDOWN = {
    'extension_configs': {
        'markdown.extensions.extra': {},
        'codehilite': {
            'css_class': 'highlight',
            'linenums': True,
            'use_pygments': True,
            'pygments_style': 'native'
        },
    },
    'output_format': 'html5',
}
