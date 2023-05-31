
const mainImage = document.getElementById('Main-image')
const smallImage = document.querySelectorAll('.Small-image')

smallImage[0].onclick = function() {
    mainImage.src = smallImage[0].src
}
smallImage[1].onclick = function() {
    mainImage.src = smallImage[1].src
}
smallImage[2].onclick = function() {
    mainImage.src = smallImage[2].src
}
smallImage[3].onclick = function() {
    mainImage.src = smallImage[3].src
}
smallImage[4].onclick = function() {
    mainImage.src = smallImage[4].src
}


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

