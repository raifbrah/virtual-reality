// Анимация при прокрутке
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


// Прокрутка по нажатию
function scrollTo(element) {
  window.scroll({
    left: 0,
    top: element.offsetTop - 90,
    behavior: 'smooth'
  })
}

const header__homeBtn = document.querySelector('.header__home-btn');
const home = document.querySelector('#home');

const header__serviceBtn = document.querySelector('.header__service-btn');
const ourService = document.querySelector('#our-service');

header__homeBtn.onclick = () => {
  scrollTo(home);
}
header__serviceBtn.onclick = () => {
  scrollTo(ourService);
}