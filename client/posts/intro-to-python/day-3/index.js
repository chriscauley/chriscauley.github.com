import React from 'react'
import { BlocksPost } from '../../../components/Snippet'

function Component(props) {
  return <BlocksPost src={props._static('blog.txt')} />
}

export default {
  Component,
  path: 'intro-to-python/day-3',
  title: 'Intro to Programming - Day 3',
  tags: ['python', 'txrx'],
  date: '2014-05-07 12:00:00',
}
