import React from 'react'
import Card from './Card'

import { tag_map } from '../register'

export default function TagegoryIndex(props) {
  const posts = tag_map[props.match.params.tag]
  if (!posts) {
    throw 'Tag Missing!'
  }
  return posts.map((post) => <Card key={post.slug} post={post} />)
}
