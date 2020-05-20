import React from 'react'
import Card from './Card'

import { cat_map } from '../register'

export default function CategoryIndex(props) {
  const posts = cat_map[props.match.params.category]
  if (!posts) {
    throw 'Category Missing!'
  }
  return posts.map((post) => <Card key={post.slug} post={post} />)
}
