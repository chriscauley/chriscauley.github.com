---
layout: post
title: "Vanilla Javascript Scroll Header"
description: ""
category: 
tags: [javascript,widget,scroll header]
---
{% include JB/setup %}

Opening external links in new tabs, carousels, spamming visitors; as a developer there are many ideas that clients insist on that I am opposed to. But one of the more persistent one annoyances is a header bar with `position: fixed`. I am personally opposed to it because most users understand how to scroll up (they did scroll down, right?), and it takes up valuable screen space on mobile phones. So I decided to make a scroll header. Similar to angular or material design or the address bar in mobile chrome, the top nav of the site stays hidden until the user scrolls up. The header is slowly revealed until it is fully visible and then stays fixed as long as the user is scrolling up. When the user scrolls down again the header subtly disappears exactly as it would at the top of the page. I also made a <a href="https://jsfiddle.net/chriscauley/aqsnsegh/1/">live demo on jsfiddle</a> if you prefer.

<div class="CodeWidget">
  <div class="labels">
    <label for="scroll-1" class="js"></label>
    <label for="scroll-2" class="css"></label>
  </div>
  <input type="radio" checked="checked" id="scroll-1" name="scroll">
  <code class="content">
{% highlight js %}
var header = document.querySelector("header");
var last_scroll = 0;
var header_y = -header.scrollHeight;
window.addEventListener("scroll",function() {
  var fixed = false;
  if (window.scrollY<2*header.scrollHeight) {
    //havent scrolled past header
    header_y = -header.scrollHeight;
  } else {
    header.className = "fixed"; // you may prefer header.classList.add("fixed")
    header_y = header_y - (window.scrollY-last_scroll);
    header_y = Math.min(header_y,0);
    header_y = Math.max(header_y,-header.scrollHeight);
    header.style.top = header_y + "px";
  }
  last_scroll = window.scrollY;
  if (window.scrollY == 0) {
    header.className = ""; // you may prefer header.classList.remove("fixed")
    header.style.top = 0;
  }
});
{% endhighlight %}
  </code>
  <input type="radio" id="scroll-2" name="scroll">
  <code class="content">
{% highlight css %}
body {
  padding-top: 50px;
}

header {
  background: white;
  left: 0;
  line-height: 50px;
  height: 50px;
  padding: 0 5px;
  position: absolute;
  right: 0;
  top:0;
}
/* This is the only crutial piece of css */
header.fixed { position: fixed; }
{% endhighlight %}
  </code>  
</div>
