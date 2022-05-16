const words = ['cartucho','reina','culpable','asiento','calculadora','base','hundir','bombardear','firma','tigre']
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','x','y','z']
const wordContainer = document.getElementById('wordContainer');
const buttonNewGame = document.getElementById('newGame');
const mistakesContainer = document.getElementById('mistakesContainer');
const addNewWordButton = document.getElementById('addNewWordButton');
const buttonGiveUp = document.getElementById('buttonGiveUp');
const newWordContainer = document.getElementById('newWord');

let hits;
let mistakes;
let keysPressed = [];
let play = false;

let word = words[Math.floor((Math.random() * words.length))]

function wrongLetters (x){
    let wrongLetter = document.createElement('span');
    wrongLetter.textContent = x;
    mistakesContainer.appendChild(wrongLetter);
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
            if (unrepeatedLetter && play) {
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
                            play = false
                            alert('Has ganado');                    
                        }
                    }
                }
                if (!letterfound) {
                    mistakes+= 1;
                    wrongLetters(x);
                    if (mistakes == 6){
                        play = false
                        alert('Has perdido');
                    }
                } 
            }
        }
    });
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

function deleteWordContainer(){
    while (wordContainer.firstChild) {
        wordContainer.removeChild(wordContainer.firstChild);
    }
}

function deleteWrongContainer(){
    while (mistakesContainer.firstChild) {
        mistakesContainer.removeChild(mistakesContainer.firstChild);
    }
}
function removeNewWordContainer(){
    while (newWordContainer.firstChild) {
        newWordContainer.removeChild(newWordContainer.firstChild);
    }
}

// funcion al oprimir boton juego nuevo
function newGame (){
    //arreglar esta wea
    if (newWordContainer.firstChild){
        words.push(document.getElementsByClassName('newWordArea').textContent);
        console.log(document.getElementsByClassName('newWordArea').textContent);
        console.log(words);
    }
    hits = 0;
    mistakes = 0;
    keysPressed = [];
    play = true;
    buttonNewGame.style.display = 'none';
    buttonGiveUp.style.display = 'initial';
    addNewWordButton.style.display = 'none';
    deleteWrongContainer();
    removeNewWordContainer();
    showLetter();
    //que ocurre al presionar un boton, enviando la tecla presionada
    document.addEventListener('keydown',(Event) =>{
       keyPress(Event.key);
    });
}

function addNewWord(){
    addNewWordButton.style.display = 'none';
    let newWord = document.createElement('textarea');
    newWord.classList.add('newWordArea');
    newWord.setAttribute('placeholder','Ingrese nueva palabra');
    document.getElementById('newWord').appendChild(newWord);
}

function giveUp(){
    buttonNewGame.style.display = 'initial';
    buttonGiveUp.style.display = 'none';
    addNewWordButton.style.display = 'initial';
    deleteWordContainer();
    deleteWrongContainer();
}