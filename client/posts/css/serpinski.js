import React from 'react'
import Markdown from 'react-markdown'
import Highlight from 'react-highlight.js';

const html = `<div id="serpinski">
  <div>
    <div> ... </div> <!--               -->
    <div> ... </div> <!-- One unit cell -->
    <div> ... </div> <!--               -->
  </div>
</div>`

const content = `
A pure css Serpinski Triangle I made. The each unit cell has three divs, and to extend the fractal one level you just add three more divs in each empty div. Each div is \`width: 50%; height: 50%;\` of the parent div. The divs are then floated, making a square with three squares inside of it, and the forth quadrant is empty.

Normally pure css trangles are made using elements with \`width: 0; height: 0\` and a border with asymetrick coloring. If you are unfamiliar with this technique, you can read more at [CSS Tricks](http://css-tricks.com/snippets/css/css-triangle/ "Pure CSS Triangle"). However, because borders can't be percentages, this doesn't work with fractals. Instead we use a square, rotated pseudo elements (the \`div:before\` in the above css). The parent of the pseudo element is overflow hidden. Here's the full CSS. Feel free to email me if you want to know more. I may post more on this later.
`

const Recurse3 = ({ depth }) => (
  <div>
    {depth > 0 && (
      <>
        <Recurse3 depth={depth-1} />
        <Recurse3 depth={depth-1} />
        <Recurse3 depth={depth-1} />
      </>
    )}
  </div>
)

function Post() {
  return (
    <div>
      <Markdown>{content}</Markdown>
      <Highlight>{html}</Highlight>
      <div id="serpinski-triangle">
        <Recurse3 depth={4} />
        <Recurse3 depth={4} />
        <Recurse3 depth={4} />
      </div>
    </div>
  )
}

Object.assign(Post, {
  title: 'CSS Serpinski Triangle',
  date: '2014-03-12 00:00:00',
  modified: '2014-03-12 00:00:00',
  tags: ['css', 'fractals'],
})

export default Post
