// let gender = ""
// let age = 0;

// gender = prompt("De quel genre êtes-vous ? Homme/Femme ?").toLowerCase()
// age = prompt("Quel age avez-vous ?")

// if (gender = "homme" && age > 20) {
//     console.log("Vous êtes imposable");
// } else if (gender = "femme" && age > 18 && age < 35) {
//     console.log("Vous n'êtes pas imposable");
// } else {
//     console.log("Vous n'êtes pas imposable");
// }


function tax(genre, age) {
    if (genre === "M") {
        console.log(genre);
        if (age > 20) {
            console.log("Vous êtes imposable");
        } else {
            console.log("Vous n'êtes pas imposable");
        }
    }

    if (genre === "F") {
        console.log(genre);
        if (age >= 18 && age <= 35) {
            console.log("Vous êtes imposable");
        } else {
            console.log("vous n'êtes pas imposable")
        }
    }
}

let s = prompt("Genre ? (M/F)").toUpperCase
let n = Number(prompt("Age ?"))