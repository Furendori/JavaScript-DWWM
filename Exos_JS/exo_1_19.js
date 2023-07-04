let tableau = []
let plusGrandNombre = tableau[0]
let positionGrandNombre = 0
let userValue;

for (let i = 0; i < 9; i++) {
    userValue = parseInt(prompt("Entrez un nombre"));
    tableau.push(userValue)
}

for (let i = 0; i < tableau.length; i++) {
    if (tableau[i] > plusGrandNombre) {
        plusGrandNombre = tableau[i]
        positionGrandNombre = i + 1
    }
    
}

console.log("Le plus grand nombre est " + plusGrandNombre + " et c'était le nombre numéro " + positionGrandNombre);