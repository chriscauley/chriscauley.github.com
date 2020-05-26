import React from 'react'
import _Markdown from 'react-markdown'
import classnames from 'classnames'

export default function Markdown(props) {
  props = {
    ...props,
    className: classnames('markdown', props.className),
  }
  return <_Markdown {...props} />
}
