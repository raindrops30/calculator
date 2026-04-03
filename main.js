let temp = [];

function add (a, b) {
    let sum = a + b;
    return sum;
}

function subtract (a, b) {
    let sum = a - b;
    return sum;
}

function multiply (a, b) {
    let sum = a * b;
    return sum;
}

function divide (a, b) {
    let sum = a / b;
    return sum;
}

function operate (button) {
    

}

function storage (button) {

    if (button == "bEquals")
    {
        console.log("Equals pressed");
        //send to operate() function if equals is pressed
        //otherwise keep pushing!
    }

    temp.push(button);
    console.log(temp);
}

function updateDisplay () {
    let btn = document.querySelectorAll('button');
    btn.forEach((btn) =>
    btn.addEventListener("click", () => {
        if (btn.id) {
            storage(btn.id);
            display.textContent = btn.id;
        }
    })
    );
}



let btn0 = document.getElementById('b0');
let btn1 = document.getElementById('b1');
let btn2 = document.getElementById('b2');
let display = document.getElementById('digitDisplay');


updateDisplay();