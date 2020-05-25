import React from 'react'
import { BlocksPost } from '../../../components/Snippet'

function Component(props) {
  return <BlocksPost src={props._static('blog.txt')} />
}

export default {
  Component,
  path: 'intro-to-python/day-2',
  title: 'Intro to Programming - Day 2',
  tags: ['python', 'txrx'],
  date: '2014-04-29 12:00:00',
}
