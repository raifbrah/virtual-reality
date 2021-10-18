const header = document.querySelector(".header")

window.addEventListener('scroll', function(event) {
  const scroll = this.scrollY

  if (scroll > 1) {
    header.style.height = "60px"
    header.style.backgroundColor = "rgba(12, 16, 26, 9)"

  } else {
    header.style.height = "90px"
    header.style.backgroundColor = "rgba(12, 16, 26, 0)"
  }
})