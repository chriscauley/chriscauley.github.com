import React from 'react'
import { slug_map } from '../register'

const Hero = ({src}) => src ? (
  <div className="hero" style={{backgroundImage: `url("${src}")`}}/>
) : null

export default function Post(props) {
  const { slug, _category } = props.match.params
  const post = slug_map[slug]
  return post ? (
    <div className="blog-post">
      <Hero src={post.hero} />
      <h1>{post.title}</h1>
      <post.Component />
    </div>
  ) : null // TODO 404?
}
