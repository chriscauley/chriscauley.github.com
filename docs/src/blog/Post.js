import React from 'react'
import { slug_map } from '../register'
import ImageLoader from './ImageLoader'

export default function Post(props) {
  const { slug } = props.match.params
  const post = slug_map[slug]
  return post ? (
    <div className="blog-post">
      <ImageLoader type="hero" post={post} />
      <h1>{post.title}</h1>
      <post.Component {...post} />
    </div>
  ) : null // TODO 404?
}
