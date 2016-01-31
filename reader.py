from pelican.readers import HTMLReader
from jinja2 import Template

class JinjaReader(HTMLReader):
  def read(self,filename):
    body, metadata = super(JinjaReader,self).read(filename)
    return Template(body).render(), metadata
