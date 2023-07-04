let userNumber = "";
let userCara = []
let stringSupreme;

do {
    userNumber = prompt("Entrez UNE SEULE valeur, pas plus")
    if (userNumber.length === 1) {
        userCara.push(userNumber)
    } else if (userNumber.length > 1) {
        //prompt("J'ai dit UNE SEULE VALEUR, cogno !")
        userNumber = prompt("Entrez UNE SEULE valeur, pas plus stp")
    }

} while (userNumber != 0)

stringSupreme = userCara.join('')

console.log(stringSupreme)