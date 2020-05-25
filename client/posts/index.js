const { register } = require('../register')
const posts = [
  require('./css/serpinski'),
  require('./css/golden'),
  require('./misc/curly-vortex'),

  require('./philosophy/wrong'),

  require('./intro-to-python/day-1'),
  require('./intro-to-python/day-2'),
  require('./intro-to-python/day-3'),
]

console.log(posts[0])
posts.map((p) => register(p.default))