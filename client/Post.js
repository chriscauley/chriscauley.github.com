const cat_map = {
  css: [],
}

const tag_map = {}

export const slug_map = {}

export const listTags = () => Object.entries(tag_map)
export const listCategories = () => Object.entries(cat_map)

export const register = (post) => {
  const { slug, tags } = post

  if (slug_map[slug]) {
    throw `Slug "${slug}" is not unique`
  }
  slug_map[slug] = post
  tags.map((tag) => {
    tag_map[tag] = tag_map[tag] || []
    tag_map[tag].push(post)
  })
  post.url = `/post/${tags[0]}/${slug}/`
}
