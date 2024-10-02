let feet = document.querySelector('#feet');
let inch = document.querySelector('#inch');
let convertbtn = document.getElementById('btn');
let btnfet =document.querySelector('#btnfet');


convertbtn.addEventListener('click', () => {
    if(feet.value !== ""){
    let f = feet.value;
    let i = f * 12;
     inch.value = i;
    }
});
convertbtn.addEventListener('click', () => {
    if(feet.value !== ""){
    let f = feet.value;
    let i = f * 12;
     inch.value = i;
    }
});

btnfet.addEventListener('click', () => {
    if(inch.value !== ""){
        let i = inch.value;
        let f = i / 12;
        feet.value = f;
    }
});

// feet.addEventListener('input', ()=> {
//     let f = feet.value;
//     let i = f * 12;
//     inch.value = i;
// });

// inch.addEventListener('input', ()=>{
//     let i = inch.value;
//     let f = i / 12;

//     if(!Number. isInteger(f)){
//         f = f.toFixed(2);
//     }

//     feet.value = f;
// });