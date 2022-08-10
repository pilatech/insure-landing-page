const btnOpen = document.querySelector('.nav__toggle--open')
const btnClose = document.querySelector('.nav__toggle--close')
const nav = document.querySelector('.nav')

btnOpen.addEventListener('click', () => {
 nav.classList.add('active')
 btnClose.style.display = 'block'
 btnOpen.style.display = 'none'
})

btnClose.addEventListener('click', () => {
 nav.classList.remove('active')
 btnOpen.style.display = 'block'
 btnClose.style.display = 'none'
})