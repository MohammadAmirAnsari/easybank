let hamburger = document.querySelector('.header__hamburger')
let overlay = document.querySelector('.header__overlay')
let menu = document.querySelector('.header__menu')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('header__hamburger--open')
    overlay.classList.toggle('header__overlay--open')
    menu.classList.toggle('header__menu--open')

    document.body.classList.toggle('no-scroll', overlay.classList.contains('header__overlay--open'))

    // if (menu.classList.contains('open')) {
    //     menu.classList.add('no-scroll')
    // }else{
    //     menu.classList.remove('no-scroll')
    // }
})
// https://qxjz61vq-3000.inc1.devtunnels.ms/