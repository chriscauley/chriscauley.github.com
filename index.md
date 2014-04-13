---
layout: page
title: Fractal CSS
---
{% include JB/setup %}

## Hello www

I'm a former Chemist turned web developer. I currently work at [6ft Studios](http://6ft.com) and am the secretary at the local hackerspace, [TX/RX Labs](http://txrxlabs.org "Houston's Hackerspace") where I make the web page and teach programming classes. This blog is mostly just to showcase stuff I do in my spare time. More to come.

## Blag Posts
<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

