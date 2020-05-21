export const tag_map = {}

export const slug_map = {}

export const listTags = () => Object.entries(tag_map)

export const register = (post) => {
  const { path, tags } = post
  const [category, slug] = path.split('/')
  post._static = (s) => `/src/posts/${path}/${s}`
  Object.assign(post, {
    category,
    slug,
    thumbnail: post._static('thumbnail.png'),
    hero: post._static('hero.png'),
  })

  if (slug_map[post.slug]) {
    throw `Slug "${post.slug}" is not unique`
  }

  tags.unshift(category)
  slug_map[post.slug] = post
  tags.map((tag) => {
    tag_map[tag] = tag_map[tag] || []
    tag_map[tag].push(post)
  })
}
