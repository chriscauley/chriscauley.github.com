import React from 'react'
import Markdown from 'react-markdown'
import { register } from '../../../register'
import Snippet from '../../../components/Snippet'
import Serpinski from './Serpinski'
import { Tabs } from '@unrest/core'
import './styles.css'

const url = s => `/src/posts/css/serpinski/${s}`

const content = `
A pure css Serpinski Triangle I made. The each unit cell has three divs, and to extend the fractal one level you just add three more divs in each empty div. Each div is \`width: 50%; height: 50%;\` of the parent div. The divs are then floated, making a square with three squares inside of it, and the forth quadrant is empty.

Normally pure css trangles are made using elements with \`width: 0; height: 0\` and a border with asymetrick coloring. If you are unfamiliar with this technique, you can read more at [CSS Tricks](http://css-tricks.com/snippets/css/css-triangle/ "Pure CSS Triangle"). However, because borders can't be percentages, this doesn't work with fractals. Instead we use a square, rotated pseudo elements (the \`div:before\` in the above css). The parent of the pseudo element is overflow hidden. Here's the full CSS. Feel free to email me if you want to know more. I may post more on this later.
`

function Component() {
  const tabs = {
    demo: <Serpinski id="serpinski-triangle" depth={5} />,
    css: <Snippet src={url('styles.css')} />,
    html: <Snippet src={url('pseudo.html')} />,
  }

  return (
    <div>
      <Markdown>{content}</Markdown>
      <Tabs tabs={tabs} />
    </div>
  )
}

register({
  Component,
  thumbnail: url('thumbnail.png'),
  hero: url('hero.png'),
  description: 'A recursive triforce using nothing but HTML and CSS.',
  title: 'CSS Serpinski Triangle',
  slug: 'serpinski',
  date: '2014-03-12 00:00:00',
  modified: '2014-03-12 00:00:00',
  tags: ['css', 'fractals'],
})
