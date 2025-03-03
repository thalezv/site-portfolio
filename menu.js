// variaveis, aonde, buscão o valor em um dado do documento html, apartir de um id
let buttonmenu = document.getElementById('button-menu')
let menu = document.getElementById('menu-mobile')

//eventos, no caso o de clicar sobre o obejto
buttonmenu.addEventListener('click', ()=>{
    //cria uma classe, chamadar abrir
    menu.classList.add('abrir')
})

menu.addEventListener('click', ()=>{
    //remove uma classe, chamada abrir
    menu.classList.remove('abrir')
})
