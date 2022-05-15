const words = ['auto']
const wordContainer = document.getElementById('wordContainer');
const buttonNewGame = document.getElementById('newGame');
let letter;

let word = words[0]

function showLetter (){
    for (let index = 0; index < word.length; index++) {
        let selectedword = document.createElement('span');
        selectedword.textContent = word[index];
        selectedword.classList.add('letter');
        selectedword.classList.add('hidden');
        wordContainer.appendChild(selectedword);
    }
}



function newGame (){
    buttonNewGame.style.display = 'none';
    showLetter();
    document.addEventListener('keydown',(Event) =>{
        for (let index = 0; index < wordContainer.childElementCount; index++) {
            letter = wordContainer.children[index]
            if (letter.textContent == Event.key) {
                letter.classList.remove('hidden');
            }
            console.log(wordContainer.children[index].textContent);
        }
    });
}

