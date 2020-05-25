import React from 'react'
import RestHook from '@unrest/react-rest-hook'
import Highlight from 'react-highlight.js'

import Markdown from './Markdown'

const processRequest = (request) => request.text()
const prepData = (content) => ({ content })

const withSrc = RestHook('${src}', { processRequest, prepData })

const Base = ({ api, src }) => {
  const { loading, content } = api
  const filename = src.split('/').pop()
  if (loading) {
    return <div className="loading-box text-4xl h-64" />
  }
  return (
    <div className="relative">
      <a
        href={src}
        className="absolute top-0 right-0 bg-gray-400 px-2 py-1 border rounded-bl"
        target="_blank"
        rel="noreferrer"
      >
        {filename}
        <i className="ml-2 fa fa-external-link" />
      </a>
      <Highlight>{content}</Highlight>
    </div>
  )
}

const Snippet = withSrc(Base)

export default Snippet

const BLOCK_RE = /\/\* (BLOCK|INCLUDE) ([\w.]+)\s*\*\//

const parseBlocks = (text) => {
  const lines = text.split('\n')
  const blocks = []
  let current_block
  lines.forEach((line, index) => {
    const match = line.match(BLOCK_RE)
    if (match) {
      current_block = {
        action: match[1],
        type: match[2],
        lines: [],
        index,
      }
      blocks.push(current_block)
      if (current_block.action === 'INCLUDE') {
        current_block.path = current_block.type
        current_block.type = 'include'
      }
    } else {
      current_block.lines.push(line)
    }
  })
  blocks.forEach((b) => {
    b.text = b.lines.join('\n').trim()
    b.Tag = TYPES[b.type]
  })
  return blocks
}

const TYPES = {
  markdown({ text }) {
    return <Markdown>{text}</Markdown>
  },
  python({ text }) {
    return <Highlight langugage={'python'}>{text}</Highlight>
  },
  html({ text }) {
    return <Markdown>{text}</Markdown>
  },
  include({ path, _static }) {
    return <Snippet src={_static(path)} />
  },
}

export const BlocksSnippet = withSrc((props) => {
  const { loading, content } = props.api
  if (loading) {
    return <div className="loading-box text-4xl h-64" />
  }
  const blocks = parseBlocks(content)
  return blocks.map(({ Tag, index, text, path }) => (
    <div key={index} className="mb-8">
      <Tag text={text} _static={props._static} path={path} />
    </div>
  ))
})

export function BlocksPost(props) {
  return (
    <BlocksSnippet src={props._static('blog.txt')} _static={props._static} />
  )
}
