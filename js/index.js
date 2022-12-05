
let $flexCheck1, $flexCheck2, $flexCheck3, $flexCheck4, $btnGenerate,
$passwordGenerated, $inputLength, $copyText;

const initVars = () => {
    $flexCheck1 = document.getElementById("flexCheck1");
    $flexCheck2 = document.getElementById("flexCheck2");
    $flexCheck3 = document.getElementById("flexCheck3");
    $flexCheck4 = document.getElementById("flexCheck4");
    $btnGenerate = document.getElementById("btnGenerate");
    $passwordGenerated = document.getElementById("passwordGenerated");
    $inputLength = document.getElementById("inputLength");
    $passwordLabel = document.getElementById("passwordLabel");
    $copyText = document.querySelector('.passResult');
  };


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

    $passwordGenerated.value = generatePassword(base, length);
};

document.addEventListener("DOMContentLoaded", () => {
	initVars();

    $btnGenerate.addEventListener("click", () => {
        generate();
    });
    $inputLength.addEventListener("change", (e) => {
        $passwordLabel.innerText = `Longitud de Caracter (${e.target.value})`;
      });
    $copyText.querySelector('img').addEventListener('click',function(){
        let input = $copyText.querySelector('input.form-control');
        input.select();
        document.execCommand('copy');
        $copyText.classList.add('active');
        window.getSelection().removeAllRanges();
        setTimeout(function() {
            $copyText.classList.remove('active');
        },2500);
        })
    });  


    