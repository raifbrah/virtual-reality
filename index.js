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

const header__aboutUsBtn = document.querySelector('.header__about-us-btn');
const aboutUs = document.querySelector('#about-us-top');

const header__ourTeamBtn = document.querySelector('.header__our-team-btn');
const ourTeam = document.querySelector('#our-team');

const header__subscribeBtn = document.querySelector('.header__subscribe-btn');
const subscribe = document.querySelector('#subscribe');

header__homeBtn.onclick = () => {
  scrollTo(home)
}
header__serviceBtn.onclick = () => {
  scrollTo(ourService)
}
header__aboutUsBtn.onclick = () => {
  scrollTo(aboutUs)
}
header__ourTeamBtn.onclick = () => {
  scrollTo(ourTeam)
}
header__subscribeBtn.onclick = () => {
  scrollTo(subscribe)
}