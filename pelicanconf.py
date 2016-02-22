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

THEME = '/home/chriscauley/pelican-blog/landscape/'

from pelican.readers import HTMLReader
from jinja2 import FileSystemLoader
from jinja2.environment import Environment
import arrow

class JinjaReader(HTMLReader):
  def get_meta_data(self,text):
    print 1
    lines = [l.strip() for l in text.split("<body>")[0].split('\n') if l.strip()]
    print lines
    out = {}
    for line in lines:
      i = line.index(":")
      out[line[:i]] = line[i+1:]
    for k,v in out:
      if k in ['date','modified']:
        out[k] = arrow.get(value).datetime
    return out
  def read(self,filename):
    env = Environment()
    BASE_DIR = "content/"
    TEMPLATE_DIR = BASE_DIR+"/".join(filename.split(BASE_DIR)[-1].split("/")[:-1])
    env.loader = FileSystemLoader(TEMPLATE_DIR)
    text = env.get_template(filename.split(TEMPLATE_DIR)[-1]).render()
    metadata = self.get_meta_data(text)
    return text, metadata

READERS = {
  'html': JinjaReader
}
