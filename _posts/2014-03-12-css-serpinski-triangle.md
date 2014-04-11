---
layout: post
title: "CSS Serpinski Triangle"
description: ""
category: 
tags: []
---
{% include JB/setup %}

{% include projects/serpinski/index.html %}

A pure css Serpinski Triangle I made. Normally pure css trangles are made using elements with `width: 0; height: 0` and a border with asymetric coloring. For example, the following would make a downward arrow, since only the top border is colored.

{% highlight css %}
.yellow-down-arrow {
  border: solid 10px;
  border-color: yellow transparent transparent transparent;
  height: 0;
  width: 0;
}
{% endhighlight %}

<style>
.yellow-down-arrow {
  border: solid 10px;
  border-color: yellow transparent transparent transparent;
  height: 0;
  width: 0;
}
</style>

<div class="yellow-down-arrow">&nbsp;</div>

However, because borders can't be percentages, this doesn't work for a simple fractal triangle. As a result I had to use square, rotated pseudo elements. The parent of the pseudo element is overflow hidden. Here's the full CSS. Feel free to email me if you want to know more.

{% highlight css %}
{% include project-assets/serpinski.css %}
{% endhighlight %}

