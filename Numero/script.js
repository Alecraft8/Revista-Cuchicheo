var numberToGuess = Math.floor(Math.random() * 100) + 1;
let numeroIntentos = 10;
let ganar = false;
const adivina = document.getElementById("adivina");

function checkGuess() {
    if (numeroIntentos == 1) {
        adivina.innerHTML = "<p style='color:white;'>GAME OVER</p>"
        adivina.style.backgroundColor = "#a01";
        adivina.addEventListener("click", ()=>{
        location.reload();
        return false;
    })}

    if (ganar == false){
        var guess = document.getElementById('guess').value;
        var result = document.getElementById('result');
    
        if (guess < numberToGuess) {
            result.textContent = 'Muy Bajo!';
            result.style.color = 'red';
        } else if (guess > numberToGuess) {
            result.textContent = 'Muy Alto!';
            result.style.color = 'red';
        } else {
            result.textContent = 'Correcto! El numero es ' + numberToGuess;
            result.style.color = 'green';
            adivina.innerHTML = "<p style='color:white;'>GANASTE</p>"
            adivina.style.backgroundColor = "#2a1"
            adivina.addEventListener("click", ()=>{
                location.reload();
            })
            return false;
        }
     
        
        numeroIntentos--;
        document.getElementById("failnumbers").innerHTML = numeroIntentos;

    }
}