const menuBtn = document.querySelector('.menu__icon')
const menu = document.querySelector('.menu__list')

if(menuBtn && menu){
    menuBtn.addEventListener('click', () =>{
        menuBtn.classList.toggle('active')
        menu.classList.toggle('active')
    })
}

const anchors = document.querySelectorAll('a[href*="#"]')

anchors.forEach(anchor => {
    anchor.addEventListener('click', e =>{
        e.preventDefault()

        const blockId = anchor.getAttribute('href').substring(1)

        document.getElementById(blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    })
})
