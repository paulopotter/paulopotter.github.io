#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'Paulo Oliveira'
SITE_BAR_TITLE = u'Paulo Oliveira || Um dev qualquer'
SITENAME = u'Paulo Oliveira'
SITE_NAME_SUBTITLE = u'Full stack web Developer'
# SITEURL = 'http://local.umdevqualquer.com.br:8000'
SITEURL = 'https://umdevqualquer.com.br'
AUTHOR_SAVE_AS = 'author.html'
HASH_GRAVATAR = 'cd58d60fac779175c0ab6ac1b912d4b5'

PATH = 'content'
LOCALE = ('bra', 'pt_BR')
DEFAULT_LANG = u'pt_BR'
TIMEZONE = u'America/Sao_Paulo'
DEFAULT_DATE_FORMAT = ('%d %b %Y')

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None
FEED_USE_SUMMARY = True

# Blogroll
LINKS = ()

# Social widget
SOCIAL = ()

# Uncomment following line if you want document-relative URLs when developing
SLUGIFY_SOURCE = 'title'
THEME = u'./themes/made_by_designer'
DEFAULT_CATEGORY = 'Sem categoria'
THEME_STATIC_URL = u'/theme'

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
    'feed_summary'
]

RELATED_POSTS_MAX = 5

# Markdown Extensions
MARKDOWN_EXTENSIONS = [
    'codehilite(css_class=highlight, linenums=True, use_pygments=True)',
    'extra'
]

