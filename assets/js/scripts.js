let hamburger = document.querySelector('.header__hamburger')
let overlay = document.querySelector('.overlay')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open')
    overlay.classList.toggle('overlay--active')

    if (overlay.classList.contains('overlay--active')) {
        document.body.classList.add('no-scroll')
    }else{
        document.body.classList.remove('no-scroll')

    }
})
// https://qxjz61vq-3000.inc1.devtunnels.ms/