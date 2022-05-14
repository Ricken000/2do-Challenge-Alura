const words = ['auto']
const wordContainer = document.getElementById('wordContainer');

let word = words[0]

for (let index = 0; index < word.length; index++) {
    let selectedword = document.createElement('span');
    selectedword.textContent = word[index];
    selectedword.classList.add('letter');
    selectedword.classList.add('hidden');
    wordContainer.appendChild(selectedword);
}

document.addEventListener('keydown', (event) =>{
    const keyname = event.key;
});