let tableau1 = []
let tableau2 = []
let tabSomme = []

for (let i = 0; i < 8; i++) {
    let valeur = parseInt(prompt("Entrez une valeur"))
    tableau1.push(valeur)
}

for (let i = 0; i < 9; i++) {
    let valeur = parseInt(prompt("Entrez une valeur"))
    tableau2.push(valeur)
}
for (let i = 0; i < tableau1.length; i++) {
    let somme = tableau1[i] + tableau2[i];
    tabSomme.push(somme)
}

console.log(tableau1);
console.log(tableau2);
console.log(tabSomme)