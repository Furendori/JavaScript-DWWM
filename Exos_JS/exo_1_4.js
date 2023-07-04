let userNumber = prompt("Entrez un nombre compris entre 10 et 20")

while (userNumber < 10 || userNumber > 20) {
    if(userNumber < 10) {
        console.log("Plus grand")
    } else if (userNumber > 20) {
        console.log("Plus petit");
    }

    userNumber = prompt("Entrez un nombre compris entre 10 et 20")
}

console.log("Votre numéro : " + userNumber)