const circle = document.querySelector('.circle');
const colors = ['red', 'blue', 'green', 'purple', 'orange', 'white', 'black'];
let index = 0;

function changeBorderColor() {
    circle.style.borderBottomColor = colors[index];
    circle.style.borderTopColor = colors[index];
    index = (index + 1) % colors.length;
}

setInterval(changeBorderColor, 2000);   
