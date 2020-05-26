export default {
  post: ({ slug, category }) => `/post/${category}/${slug}/`,
  tag: (tag) => `/post/${tag}/`,
}
