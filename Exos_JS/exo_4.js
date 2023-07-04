const number = parseInt(prompt("Entrez un nombre supérieur a 0"))

if (isNaN(number)) {
    console.log("Ceci n'est pas un nombre")
} else if (number > 0) {
    console.log(number)
} else {
    console.log("Vous deviez entrer un nombre supérieur à 0")
}