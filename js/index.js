const $flexCheck1 = document.getElementById('#flexCheck1');
const $flexCheck2 = document.getElementById('#flexCheck2');
const $flexCheck3 = document.getElementById('#flexCheck3');
const $flexCheck4 = document.getElementById('#flexCheck4');
const $btnGenerate = document.getElementById('#btnGenerate');
const $passwordGenerated = document.getElementById('#passwordGenerated');
const $inputLength = document.getElementById('#inputLength');


const generatePassword = (base, length) => {
    let password = "";
    for (let x = 0; x < length; x++) {
        let random = Math.floor(Math.random() * base.length);
        password += base.charAt(random);
    }
    return password;
};



const generate = () => {
    let length = parseInt($inputLength.value);

    let base = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = ".?,;-_¡!¿*%&$/()[]{}|@><";

    if ($flexCheck1.checked) base;
    if ($flexCheck2.checked) base;
    if ($flexCheck3.checked) base+=numbers;
    if ($flexCheck4.checked) base+=symbols;

    $passwordGenerated.innerText = generatePassword(base, length);
};

window.addEventListener("DOMContentLoaded", () => {
    $btnGenerate.addEventListener("click", () => {
        generate();
    });
});