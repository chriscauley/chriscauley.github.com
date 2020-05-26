import React from 'react'
import Markdown from '../../../components/Markdown'
import Snippet from '../../../components/Snippet'

const Component = ({ _static }) => {
  return (
    <>
      <Markdown>
        {
          'Opening external links in new tabs, carousels, spamming visitors; as a developer there are many ideas that clients insist on that I am opposed to. But one of the more persistent one annoyances is a header bar with `position: fixed`. I am personally opposed to it because most users understand how to scroll up (they did scroll down, right?), and it takes up valuable screen space on mobile phones. So I decided to make a scroll header. Similar to angular or material design or the address bar in mobile chrome, the top nav of the site stays hidden until the user scrolls up. The header is slowly revealed until it is fully visible and then stays fixed as long as the user is scrolling up. When the user scrolls down again the header subtly disappears exactly as it would at the top of the page. I also made a [live demo on jsfiddle](https://jsfiddle.net/chriscauley/aqsnsegh/1/) if you prefer.'
        }
      </Markdown>
      <Snippet src={_static('scroll.js')} />

      {
        "Here's the css I used. Really you can change whatever you want except the final line, so don't feel married to any of this."
      }

      <Snippet src={_static('scroll.css')} />
    </>
  )
}

export default {
  Component,
  path: 'javascript/scroll-header',
  title: 'Vanilla Javascript Scroll Header',
  date: '2016-01-22 11:22:52',
  modified: '2016-12-09 14:08:00',
  tags: ['vanilla.js', 'widgets'],
}
