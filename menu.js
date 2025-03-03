let buttonmenu = document.getElementById('button-menu')
let menu = document.getElementById('menu-mobile')

buttonmenu.addEventListener('click', ()=>{
    menu.classList.add('abrir')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir')
})
