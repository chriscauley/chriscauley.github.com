import React from 'react'
import Markdown from 'react-markdown'
import Highlight from 'react-highlight.js'
import css from '@unrest/css'

import { register } from '../../../register'

const md1 = `I missed out on the [April Recreational Programming Group](https://apps.txrxlabs.org/blog/121/recreational-computer-programming-group-april-2014/) because I was at PyCon. He presented on a really cool texture genreator. It's written in Processing so I decided to see how easy it is to run it using [processing.js](http://processingjs.org/). TL;DR - Really easy.

The only necessary change I had to make to the code was to add a note to preload the image. Normally processing will execute assuming that the image file is local, but the DOM hasn't yet loaded the image. To do this you just add a comment to preload the image:`

const md2 = `I also resized it and changed the image. I wanted to add the ability to input an image url via a text field and so that any visitors can change the image. This, it turns out isn't possible. The preload string cannot use a javascript variable. Also since the image is loaded via ajax, cross site scripting considerations prevent it. I could do this using a django app that would dynamically rewrite the pde file, but I don't want to host a place for people to randomly upload images. If Steve is impressed with this I might do it, bu it hardly seems worth booting up a VPS.

Also I added a button for freezing the image so that you can easily save the image. I might eventually create a txrxlabs.org subdomain for hosting this and other projects, but for now this is all I'm doing:`

const code = `/* @pjs preload="13940260644_7fe66ea59c_c.jpg" */;
String source_image_file = "13940260644_7fe66ea59c_c.jpg";
int xdim = 300;
int ydim = 300;
int nparticles = 50000;`

class Component extends React.Component {
  state = {}
  render() {
    const { clicked } = this.state
    const { _static } = this.props
    const props = {
      style: {
        background: `url(${_static('ss.png')}) no-repeat`,
        opacity: 0.6,
        width: '100%',
        height: 400,
        overflowX: 'hidden',
      },
    }
    if (clicked) {
      delete props.style.background
      delete props.style.opacity
      props.src = '/src/posts/misc/curly-vortex/demo.html'
    }
    return (
      <>
        <Markdown>{md1}</Markdown>
        <Highlight className="mb-6">{code}</Highlight>
        <Markdown>{md2}</Markdown>
        {!clicked && (
          <button
            className={css.button('mb-6')}
            onClick={() => this.setState({ clicked: true })}
          >
            Click here to start demo
          </button>
        )}
        <iframe {...props}></iframe>
      </>
    )
  }
}

register({
  Component,
  path: 'misc/curly-vortex',
  title: "Smcameron's curly vortex",
  tags: ['txrx', 'processing'],
  date: '2014-04-19 12:00:00',
})
