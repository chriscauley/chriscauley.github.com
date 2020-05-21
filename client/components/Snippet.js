import React from 'react'
import RestHook from '@unrest/react-rest-hook'
import Highlight from 'react-highlight.js'

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

export default withSrc(Base)
