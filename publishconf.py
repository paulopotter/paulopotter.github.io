#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

# This file is only used if you use `make publish` or
# explicitly specify it as your config file.

import os
import sys
sys.path.append(os.curdir)

from pelicanconf import *  # noqa


SITE_BAR_TITLE = u'Um dev qualquer || Paulo Oliveira'
SITEURL = 'https://umdevqualquer.com.br'
RELATIVE_URLS = False

FEED_ALL_ATOM = 'feeds/all.atom.xml'
CATEGORY_FEED_ATOM = 'feeds/{slug}.atom.xml'
FEED_DOMAIN = SITEURL


DELETE_OUTPUT_DIRECTORY = True
PLUGIN_PATHS = ['plugins']
PLUGINS = [
    'minchin.pelican.plugins.optimize_images',
    # https://github.com/MinchinWeb/minchin.pelican.plugins.optimize_images
]

# Following items are often useful when publishing

# DISQUS_SITENAME = ""
# GOOGLE_ANALYTICS = ""
