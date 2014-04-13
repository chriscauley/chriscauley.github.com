---
layout: post
title: "Pure CSS Golden Spiral"
description: ""
category: 
tags: [css,fractal]
---
{% include JB/setup %}
<div class="first-image">
  <img alt="Pure CSS Golden Rectangle" src="/assets/images/golden_rectangle.png" />
</div>

The [golden ratio](http://en.wikipedia.org/wiki/Golden_rectangle "Wikipedia: Golden Rectangle") has long fascinated mankind because blah blah blah... And the [golden rectangle](http://en.wikipedia.org/wiki/Golden_rectangle "Wikipedia: Golden Rectangle") has aesthetic properties because of yadda yadda yadda... If you don't already know about this magical number, I'm not the person to educate you. Trust me, it's cool.

About a year ago I decided to create the golden rectangle in pure CSS as a way to learn about inheritance and to prepare myself to create more complex fractals in CSS/HTML.

The golden rectangle has sides with a ratio of 1.618... which is special because, if you divide the rectangle into a square and another rectangle, the sides of the inner rectangle has the same ratio as the outer rectangle. It is made by repeating the same rectangle scaled down, rotated, and embedded into itself over and over. So we start with embedded divs, the first of which has a set size and the remaining are 62% (1/1.618x100%) the size to its parent div.

<div class="CodeWidget">
  <div class="labels">
    <label for="_golden1-1" class="demo"></label>
    <label for="_golden1-2" class="css"></label>
    <label for="_golden1-3" class="html"></label>
  </div>
  <input type="radio" checked="checked" id="_golden1-1" name="golden1">
  <code class="content">
    {% include projects/golden/step1.html %}
  </code>
  <input type="radio" id="_golden1-2" name="golden1">
  <div class="content">
    {% highlight css %}
{% include projects/golden/step1.css %}{% endhighlight %}
  </div>
  <input type="radio" id="_golden1-3" name="golden1">
  <div class="content">
{% highlight html %}
    <div id="golden1">
      <div>{ ... }</div> <!-- One unit cell -->
    </div>
{% endhighlight %}
  </div>
</div>

Then the child divs are placed at the top right corner, outside of the parent div using absolute positioning. The children are then rotated a quarter turn to create the golden rectangle. If you hover over any of the rectangles in the following figure, the :hover pseudo class will rotate the child and all of it's ancestor divs. This forms the golden rectangle.

<div class="CodeWidget">
  <div class="labels">
    <label for="_golden2-1" class="demo"></label>
    <label for="_golden2-2" class="css"></label>
    <label for="_golden2-3" class="html"></label>
  </div>
  <input type="radio" checked="checked" id="_golden2-1" name="golden2">
  <code class="content">
    {% include projects/golden/step2.html %}
  </code>
  <input type="radio" id="_golden2-2" name="golden2">
  <div class="content">
    {% highlight css %}
{% include projects/golden/step2.css %}{% endhighlight %}
  </div>
  <input type="radio" id="_golden2-3" name="golden2">
  <div class="content">
{% highlight html %}
    <div id="golden2">
      <div>{ ... }</div> <!-- One unit cell -->
    </div>
{% endhighlight %}
  </div>
</div>

Next, :before (circle) and :after (background) elements are added to create colors. This creates the golden spiral. In the final product, all squares inside the golden rectangle are set to the same colors (red, blue, and yellow), which is then hue rotated to product a unique set of colors at each level. The hue rotation adds up as you go down the DOM tree, creating a wide array of colors with only 3 color declarations.

In this example, if you hover over a div it will remove hue-rotate for all child divs.

<div class="CodeWidget">
  <div class="labels">
    <label for="_golden3-1" class="demo"></label>
    <label for="_golden3-2" class="css"></label>
    <label for="_golden3-3" class="html"></label>
  </div>
  <input type="radio" checked="checked" id="_golden3-1" name="golden3">
  <code class="content">
    {% include projects/golden/step3.html %}
  </code>
  <input type="radio" id="_golden3-2" name="golden3">
  <div class="content">
    {% highlight css %}
{% include projects/golden/step3.css %}{% endhighlight %}
  </div>
  <input type="radio" id="_golden3-3" name="golden3">
  <div class="content">
{% highlight html %}
    <div id="golden3">
      <div>{ ... }</div> <!-- One unit cell -->
    </div>
{% endhighlight %}
  </div>
</div>
