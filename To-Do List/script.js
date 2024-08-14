let btn = document.getElementById('add');
let input = document.getElementById('input');
let ul = document.getElementById('list');

btn.addEventListener('click', () =>{
    if(input !== ""){
        let addtext = document.createElement('li');
        addtext.textContent = input.value;
        ul.appendChild(addtext);
        input.value = '';
    };
});
