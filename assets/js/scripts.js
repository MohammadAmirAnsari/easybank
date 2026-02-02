let hamburger = document.querySelector('.header__hamburger')
let overlay = document.querySelector('.overlay')

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('open')
    overlay.classList.toggle('overlay--active')
})