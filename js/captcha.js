document.getElementById('formulario').addEventListener('submit', function(event) {
    // Prevenir el envío del formulario
    event.preventDefault();

let input_captcha = document.getElementById('input_captcha');
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
const submit = document.getElementById('submit');
const error = document.querySelector("#error");
const correcto = document.querySelector("#correcto");

num1.innerText = Math.floor(Math.random()*10);
num2.innerText = Math.floor(Math.random()*10);

let numero1 = num1.innerText;
let numero2 = num2.innerText;

submit.addEventListener("click", ()=>{
    let sum_result = parseInt(numero1) + parseInt(numero2);
    let resultado = parseInt(input_captcha.value);
    if (resultado == sum_result) {
        correcto.classList.add("visible")
        error.classList.remove("visible");
        event.target.submit();
        
    } else {
        error.classList.add("visible");
        correcto.classList.remove("visible")
    }
})


});