let tabNotes = []
let userValue;

for (let i = 0; i < 9; i++) {
    userValue = parseInt(prompt("Entrez un nombre"))
    tabNotes.push(userValue)
}

let somme= 0;

for (let i = 0; i < tabNotes.length; i++) {
    somme += tabNotes[i];
}

let moyenne = somme / tabNotes.length

console.log(tabNotes);
console.log("La moyenne des notes est " + moyenne)