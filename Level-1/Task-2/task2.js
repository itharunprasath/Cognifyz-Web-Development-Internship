function showGreeting(){
    const now= new Date();
    const hours= now.getHours();
    let greeting;
    if(hours<12){
        greeting = "Good Morning! ";
    }else if (hours < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    alert(greeting);
}
window.onload = showGreeting;
const changeColorDiv = document.querySelector('.changecolor');
changeColorDiv.addEventListener('click', () => {
    const randomColor = getRandomHexColor();
    changeColorDiv.style.backgroundColor = randomColor
});

function getRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const res = document.getElementById('result');
const addition = document.getElementById('add');


addition.addEventListener('click', () => {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if (isNaN(num1) || isNaN(num2)) {
        res.textContent = 'Please enter valid numbers.';
        return;
    }

    const sum = num1 + num2;
    res.textContent = 'Result: ' + sum;
});