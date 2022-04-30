export function hide(){

const menuBebestibles = document.querySelector('#content-menu1')
const menuComidas = document.querySelector('#content-menu2')
const btnBebida = document.querySelector('#btnBebida')
const btnComidas = document.querySelector('#btnComida')

btnBebida.addEventListener('click', function()
{
 menuComidas.style.display = 'none'
})

btnComidas.addEventListener('click', function () {
    menuBebestibles.style.display = 'none'
})
}