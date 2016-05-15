<markdown><yield/>
  this.on("mount",function() {
    var html = this.root.innerHTML.replace(/&amp;/g,"&").replace(/&amp;#123;/g,"{");
    this.root.innerHTML = markdown.toHTML(html);
  });
</markdown>
