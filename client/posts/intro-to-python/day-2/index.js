import React from 'react'
import { BlocksPost } from '../../../components/Snippet'

import { register } from '../../../register'

register({
  Component: (props) => <BlocksPost src={props._static("blog.txt")} _static={props._static} />,
  path: "intro-to-python/day-2",
  title: "Intro to Programming - Day 2",
  tags: ["python", "txrx"],
  date: "2014-04-29 12:00:00"
})