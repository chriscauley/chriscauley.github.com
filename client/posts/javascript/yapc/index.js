import React from 'react'
import Markdown from '../../../components/Markdown'
import Highlight from 'react-highlight.js'

const update = "**UPDATE May 25, 2020** Unfortunately I deleted the server hosting this project and haven't had time to fix it. I'll hopefully clear this up in the future. Seeing as I'm on linux again (not chromebooks) and there are similar tools, this project isn't much of a priority for me"

const md1 = `I started making my own paint clone to run in the browser a few months ago, and despite the fact that it's definitely not ready for prime time I decided to push it to an externally visible url. The current instance is visible [here][1]. Of course the first step in building a project is naming the project, everything after that is just "coding it up". So I settled on "Yet Another Paint Clone" for now. Although quite a mouthful it abbreviates to "Why a PC?" The only reason I still use a PC is the Linux program [Kolourpaint][2]. Otherwise I have converted my workflow 100% to Chromebooks, so the cumbersome name is good for now.
[1]: http://chriscauley.github.com/paint/

[2]: http://en.wikipedia.org/wiki/KolourPaint`

const md2 = `Above is a screenshot illustrating many of the programs capabilities. Full current features are:

* Open/Save images to localstorage

* Save images as png (right click -&gt; "save image as...")

* Foreground/background colors (fully supported for fill, brush, circle, rectangle, and eye dropper)

* Paint brush with custom size (unlabeled number input at bottom of tools)

* Paint bucket (algorithm adopted from [William Malone's blog][3])

* Select tool (currently only for moving a selection around)

* Rect and circle tool

* Canvas resizer

* Eye Dropper (color selector)

[3]: http://www.williammalone.com/articles/html5-canvas-javascript-paint-bucket-tool/

That's about it for now. Hopefully I'll have a functional version with file IO and a more smooth interface by the end of February. Stay Tuned.`

const Component = ({_static}) => (
  <>
    <Markdown>{update}</Markdown>
    <Markdown>{md1}</Markdown>
    <img src={_static("yapc-v0.1.png")} alt="Screenshot of first release of my program" />
    <Markdown>{md2}</Markdown>
  </>
)

export default {
  Component,
  title: "YAPC 1: A good start",
  path: 'javascript/yapc',
  description: "Introducing version 0.1 of Yet Another Paint Clone",
  date: "2015-02-08 12:00:00",
  tags: ["paint", "riot"],
}