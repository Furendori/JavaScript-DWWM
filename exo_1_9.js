let plusGrandNombre = parseFloat(prompt("Entrez un nombre"))
let positionGrandNombre;


for (let i = 1; i <= 20; i++) {
    let userNumber = parseFloat(prompt("Entrez un nombre"))

    if (plusGrandNombre < userNumber) {
        plusGrandNombre = userNumber
        positionGrandNombre = i +1
    }
}

console.log(plusGrandNombre);
console.log(positionGrandNombre)