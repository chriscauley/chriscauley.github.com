<markdown><yield/>
  this.on("mount",function() {
    var html = this.root.innerHTML.replace(/&amp;/g,"&").replace(/&#123;/g,"{");
    this.root.innerHTML = markdown.toHTML(html);
  });
</markdown>
