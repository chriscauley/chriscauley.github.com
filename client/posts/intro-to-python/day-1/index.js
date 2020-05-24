import React from 'react'
import Markdown from 'react-markdown'
import Highlight from 'react-highlight.js'
import RestHook from '@unrest/react-rest-hook'

import { register } from '../../../register'

const BLOCK_RE = /\/\* BLOCK (\w+)\s*\*\//

const processRequest = (request) => request.text()
const prepData = (text) => {
  const lines = text.split('\n')
  const blocks = []
  let current_block
  lines.forEach((line, index) => {
    const match = line.match(BLOCK_RE)
    if (match) {
      current_block = {
        type: match[1],
        lines: [],
        index
      }
      blocks.push(current_block)
    } else {
      current_block.lines.push(line)
    }
  })
  blocks.forEach(b => {
    b.text = b.lines.join('\n').trim()
    b.Tag = TYPES[b.type]
  })
  console.log(blocks)
  return ({ blocks })
}

const withStatic = RestHook('${_static("./blog.txt")}', { processRequest, prepData })

const TYPES = {
  markdown: ({text}) => <Markdown>{text}</Markdown>,
  python: ({text}) => <Highlight langugage={'python'}>{text}</Highlight>,
  html: ({text}) => <Markdown>{text}</Markdown>,
}

const TextPost = withStatic((props) => {
  const { blocks } = props.api
  if (!blocks) {
    return null
  }
  return blocks.map( ({text, Tag, index}) => (
    <div key={index} className="mb-8">
      <Tag text={text} />
    </div>
  ))
})

class Component extends React.Component {
  state = {}
  render() {
    return <TextPost _static={this.props._static} />
  }
}

register({
  Component,
  path: "classes/intro-to-programming-1",
  title: "Intro to Programming",
  tags: ["python", "txrx"],
  date: "2014-04-15 12:00:00",
})