---
layout: post
title: "CSS Serpinski Triangle"
description: ""
category: 
tags: []
---
{% include JB/setup %}

{% include projects/serpinski/index.html %}

A pure css Serpinski Triangle I made. Normally pure css trangles are made using elements with `width: 0; height: 0` and a border with asymetrick coloring. If you are unfamiliar with this technique, you can read more at [CSS Tricks](http://css-tricks.com/snippets/css/css-triangle/ "Pure CSS Triangle").

However, because borders can't be percentages, this doesn't work for a simple fractal triangle. As a result I had to use square, rotated pseudo elements. The parent of the pseudo element is overflow hidden. Here's the full CSS. Feel free to email me if you want to know more. I may post more on this later.

{% highlight css %}
{% include projects/serpinski/serpinski.css %}
{% endhighlight %}

