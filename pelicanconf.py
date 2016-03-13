#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'chriscauley'
SITENAME = u'With No Love for Venus'
SITEURL = ''

PATH = 'content'

TIMEZONE = 'US/Central'

DEFAULT_LANG = u'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
#LINKS = (('Pelican', 'http://getpelican.com/'),
#         ('Python.org', 'http://python.org/'),
#         ('Jinja2', 'http://jinja.pocoo.org/'),
#         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('chirscauley', 'https://github.com/chriscauley'),
          ('@lablackey', 'http://twitter.com/lablackey'),)

DEFAULT_PAGINATION = False

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

IGNORE_FILES = ["_*.html","_*/*.html","/*"]
DEFAULT_DATE = 'fs'
THEME = '/home/chriscauley/pelican-blog/landscape/'
STATIC_PATHS = ['projects']
ARTICLE_EXCLUDES = ['projects']

from pelican.readers import HTMLReader
from jinja2 import FileSystemLoader
from jinja2.environment import Environment
import arrow

class JinjaReader(HTMLReader):
  def get_meta_data(self,text):
    lines = [l.strip() for l in text.split("<body>")[0].split('\n') if l.strip()]
    out = {}
    for line in lines:
      i = line.index(":")
      out[line[:i]] = line[i+1:]
    return { key: self.process_metadata(key,value) for key,value in out.items() }
  def read(self,filename):
    print filename
    env = Environment(lstrip_blocks=True,trim_blocks=True)
    BASE_DIR = "content/"
    TEMPLATE_DIR = BASE_DIR+"/".join(filename.split(BASE_DIR)[-1].split("/")[:-1])
    env.loader = FileSystemLoader(TEMPLATE_DIR)
    text = env.get_template(filename.split(TEMPLATE_DIR)[-1]).render()
    metadata = self.get_meta_data(text)
    text = "<body>"+"<body>".join(text.split("<body>")[1:])
    return text, metadata

READERS = {
  'html': JinjaReader
}
