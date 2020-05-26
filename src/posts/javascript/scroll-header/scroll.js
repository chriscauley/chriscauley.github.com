(function () {
  const header = document.querySelector('header')
  let last_scroll = 0
  let header_y = 0
  const header_h = header.scrollHeight // needs to be in the listener if your header changes size
  window.addEventListener('scroll', function () {
    if (window.scrollY === 0) {
      header.className = '' // you may prefer header.classList.remove("fixed")
      last_scroll = header.style.top = 0
      return
    }
    header.className = 'fixed' // you may prefer header.classList.add("fixed")
    header_y = header_y - (window.scrollY - last_scroll)
    header_y = Math.min(header_y, 0)
    header_y = Math.max(header_y, -header_h)
    header.style.top = header_y + 'px'
    last_scroll = window.scrollY
  })
})()
