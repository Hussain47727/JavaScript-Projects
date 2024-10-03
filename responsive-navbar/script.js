let list = document.getElementById('list')
let button = document.getElementById('onclick')
let cross = document.getElementById('cross')

button.addEventListener('click', ()=>{
    list.style.display = 'block'
    button.style.display = 'none'
    cross.style.display = 'block'
})

cross.addEventListener('click', ()=>{
    list.style.display = 'none'
    button.style.display = 'block'
    cross.style.display = 'none'
})