

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


const wishlist = document.querySelectorAll('.wishlist')
for(let i = 0; i < wishlist.length; i++) {

    wishlist[i].addEventListener('click', (e) => {
        //console.log('click')
        if(wishlist[i].style.color === 'red'){
            wishlist[i].style.color = 'white'
            wishlist[i].style.background = 'black'
        } else {
            wishlist[i].style.color = 'red'
            wishlist[i].style.background = 'white'
        }
    })

}


window.addEventListener("load", () => {

    const loader = document.querySelector('.dots-container')

    loader.classList.add('invi')
    loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader)
    }) 

})
