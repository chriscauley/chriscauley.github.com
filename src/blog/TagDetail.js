import React from 'react'
import Card from './Card'

import { tag_map, slug_map, sort } from '../register'

export default function TagIndex(props) {
  const posts = tag_map[props.match.params.tag]
  if (!posts) {
    throw 'Tag Missing!'
  }
  return sort(posts).map((post) => <Card key={post.slug} post={post} />)
}

export function Index() {
  return sort(Object.values(slug_map)).map((post) => (
    <Card key={post.slug} post={post} />
  ))
}
