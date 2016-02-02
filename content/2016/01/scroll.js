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
