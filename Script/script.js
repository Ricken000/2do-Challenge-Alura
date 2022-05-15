const words = ['auto']
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','x','y','z']
const wordContainer = document.getElementById('wordContainer');
const buttonNewGame = document.getElementById('newGame');
const mistakesContainer = document.getElementById('mistakesContainer');
let hits;
let mistakes;
let keysPressed = [];

let word = words[0]

function wrongLetters (x){
    let wrongLetter = document.createElement('span');
    wrongLetter.textContent = x;
    mistakesContainer.appendChild(wrongLetter);
}

// Imprime letra por letra en el div wordContainer, creando un span ademas de un espacio, añade las clases letter y hidden para propiedades css
function showLetter (){
    for (let index = 0; index < word.length; index++) {
        let selectedword = document.createElement('span');
        let space = document.createElement('span');
        selectedword.textContent = word[index];
        selectedword.classList.add('letter');
        selectedword.classList.add('hidden');
        wordContainer.appendChild(selectedword);
        space.textContent = ' ';
        wordContainer.appendChild(space);
    }
}
//funcion de verificacion de tecla
function keyPress(x) { 
    alphabet.forEach(element => {
        if (x == element){
            let unrepeatedLetter = true;
            let letterfound = false
            keysPressed.forEach(element => {
            if (x == element) {
                unrepeatedLetter = false;
            }
            });
            //verificando si hay letras repetidas
            if (unrepeatedLetter) {
                //almacenando letras presionadas
                keysPressed.push(x);
                for (let index = 0; index < wordContainer.childElementCount; index++) {
                    //comparando si la tecla presionada concuerda con alguna letra
                    let letter = wordContainer.children[index]
                    if (letter.textContent == x) {
                        letter.classList.remove('hidden');
                        hits += 1;
                        letterfound = true;
                        if (hits == word.length) {
                            alert('Has ganado');                    
                        }
                    }
                }
                if (!letterfound) {
                    mistakes+= 1;
                    wrongLetters(x);
                    if (mistakes == 6){
                        alert('Has perdido');
                    }
                } 
            }
        }
    });
}   

// funcion al oprimir boton juego nuevo
function newGame (){
    hits = 0;
    mistakes = 0;
    keysPressed = [];
    buttonNewGame.style.display = 'none';
    showLetter();
    //que ocurre al presionar un boton, enviando la tecla presionada
    document.addEventListener('keydown',(Event) =>{
       keyPress(Event.key);
    });
}