import React from 'react'
import { slug_map } from '../register'

export default function Post(props) {
  const { slug, _category } = props.match.params
  const post = slug_map[slug]
  return post ? (
    <div>
      <h1>{post.title}</h1>
      <post.Component />
    </div>
  ) : null // TODO 404?
}
