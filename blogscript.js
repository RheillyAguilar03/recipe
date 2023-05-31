
const moreBtn = document.querySelector('.more-button')
const moreText = document.querySelector('.more-text')
const holder = document.querySelector('.card-holder')

holder.addEventListener('click', e => {

    const current = e.target
    const isreadmoreBtn = current.className.includes('more-button')
    if(!isreadmoreBtn){
        return;
    }

    const currentText = e.target.parentNode.querySelector('.more-text')
    currentText.classList.toggle('open')

    current.textContent = current.textContent.includes('Read More') ? 'Read Less' : 'Read More'

})


const menuButton = document.querySelector('.menu-button')
const menuExit = document.querySelector('.exit-button')
const menuLinks = document.getElementById('navigation-links')
const body = document.querySelector('body')

menuButton.onclick = () => {
    menuLinks.classList.add('show')
    menuExit.classList.add('appear')
    menuButton.classList.add('hide')
    body.classList.add('dont')
}

menuExit.onclick = () => {
    menuLinks.classList.remove('show')
    menuExit.classList.remove('appear')
    menuButton.classList.remove('hide')
    body.classList.remove('dont')
}

const stickyNav = document.getElementById('navigation')

window.onscroll = () => {
    this.scrollY > 20 ? stickyNav.classList.add('sticky') : stickyNav.classList.remove('sticky')
}

window.addEventListener("load", () => {

    const loader = document.querySelector('.dots-container')

    loader.classList.add('invi')
    loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader)
    }) 

})
