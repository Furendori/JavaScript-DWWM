let tableau = [9, 1, 10, 15, 16, 14, 20, 17];
let somme = 0;

for (let i = 0; i < tableau.length; i++) {
    somme += tableau[i];
}

console.log("La moyenne des valeurs est de " + somme);