import React from 'react'
import { BlocksPost } from '../../../components/Snippet'

export default {
  Component: (props) => <BlocksPost src={props._static("blog.txt")} />,
  path: "intro-to-python/day-1",
  title: "Intro to Programming",
  tags: ["python", "txrx"],
  date: "2014-04-15 12:00:00",
}