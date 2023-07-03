let gender = ""
let age = 0;

gender = prompt("De quel genre êtes-vous ? Homme/Femme ?").toLowerCase()
age = prompt("Quel age avez-vous ?")

if (gender = "homme" && age > 20) {
    console.log("Vous êtes imposable");
} else if (gender = "femme" && age > 18 && age < 35) {
    console.log("Vous n'êtes pas imposable");
} else {
    console.log("Vous n'êtes pas imposable");
}