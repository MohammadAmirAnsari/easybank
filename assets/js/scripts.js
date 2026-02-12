let hamburger = document.querySelector('.header__hamburger')
let overlay = document.querySelector('.overlay')
let menu = document.querySelector('header ul')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger--open')
    overlay.classList.toggle('overlay--active')
    menu.classList.toggle('menu--open')
    
    if (overlay.classList.contains('overlay--active')) {
        document.body.classList.add('no-scroll')
    }else{
        document.body.classList.remove('no-scroll')
    }

    // if (menu.classList.contains('open')) {
    //     menu.classList.add('no-scroll')
    // }else{
    //     menu.classList.remove('no-scroll')
    // }
})
// https://qxjz61vq-3000.inc1.devtunnels.ms/