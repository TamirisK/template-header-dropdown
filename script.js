const header = document.querySelector('header')
const menuToggle = document.querySelector('.menu__toggle')

menuToggle.onclick = function(){
  header.classList.toggle('active')
}