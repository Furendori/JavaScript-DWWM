let plusGrandNombre = 0;
let userNumber = parseInt(prompt("Entrez un nombre"))
let positionGrandNombre;

while (userNumber != 0) {

    userNumber = parseInt(prompt("Entrez un nombre"))
    console.log(userNumber);
    if (plusGrandNombre < userNumber) {
        plusGrandNombre = userNumber
        positionGrandNombre = i +1

    }
}

console.log(plusGrandNombre);
console.log(positionGrandNombre)