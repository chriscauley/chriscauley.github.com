export default {
  post: ({ slug, category }) => `/post/${slug}/${category}/`,
  category: (category) => `/post/${category}/`,
  tag: (tag) => `/post/${tag}/`,
}
