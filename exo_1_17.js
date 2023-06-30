let tableau1 = [4, 8, 7, 9, 1, 5, 4, 6]
let tableau2 = [7, 6, 5, 2, 1, 3, 7, 4]
let tabSomme = []

// for (let i = 0; i < 8; i++) {
//     let valeur = parseInt(prompt("Entrez une valeur"))
//     tableau1.push(valeur)
// }

// for (let i = 0; i < 9; i++) {
//     let valeur = parseInt(prompt("Entrez une valeur"))
//     tableau2.push(valeur)
// }
for (let i = 0; i < tableau1.length; i++) {
    let somme = tableau1[i] + tableau2[i];
    tabSomme.push(somme)
}

console.log(tableau1);
console.log(tableau2);
console.log(tabSomme)