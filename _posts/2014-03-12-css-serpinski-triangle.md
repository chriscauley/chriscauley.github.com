---
layout: post
title: "CSS Serpinski Triangle"
description: ""
category: 
tags: [css,fractals]
---
{% include JB/setup %}

<div class="CodeWidget">
  <div class="labels">
    <label for="_serpinski1" class="demo"></label>
    <label for="_serpinski2" class="css"></label>
    <label for="_serpinski3" class="html"></label>
  </div>
  <input type="radio" checked="checked" id="_serpinski1" name="serpinski">
  <code class="content">
    {% include projects/serpinski/index.html %}
  </code>
  <input type="radio" id="_serpinski2" name="serpinski">
  <div class="content">
    {% highlight css %}
{% include projects/serpinski/serpinski.css %}{% endhighlight %}
  </div>
  <input type="radio" id="_serpinski3" name="serpinski">
  <div class="content">
{% highlight html %}
    <div id="serpinski">
      <div>
        <div>{ ... }</div> <!--               -->
        <div>{ ... }</div> <!-- One unit cell -->
        <div>{ ... }</div> <!--               -->
      </div>
    </div>
{% endhighlight %}
  </div>
</div>

A pure css Serpinski Triangle I made. The each unit cell has three divs, and to extend the fractal one level you just add three more divs in each empty div. Each div is `width: 50%; height: 50%;` of the parent div. The divs are then floated, making a square with three squares inside of it, and the forth quadrant is empty.

Normally pure css trangles are made using elements with `width: 0; height: 0` and a border with asymetrick coloring. If you are unfamiliar with this technique, you can read more at [CSS Tricks](http://css-tricks.com/snippets/css/css-triangle/ "Pure CSS Triangle"). However, because borders can't be percentages, this doesn't work with fractals. Instead we use a square, rotated pseudo elements (the `div:before` in the above css). The parent of the pseudo element is overflow hidden. Here's the full CSS. Feel free to email me if you want to know more. I may post more on this later.


