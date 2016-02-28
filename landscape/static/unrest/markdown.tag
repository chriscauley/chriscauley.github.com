<markdown><yield/>
  this.on("mount",function() {
    console.log(1);
    this.root.innerHTML = markdown.toHTML(this.root.innerHTML);
  });
</markdown>
