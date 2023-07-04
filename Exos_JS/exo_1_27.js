let nbPhotocopies = parseInt(prompt("Nombre de copies ?"));
let tarif1 = 0.10
let tarif2 = 0.9
let tarif3 = 0.8
let prixFinal

if (nbPhotocopies <= 10) {
    prixFinal = nbPhotocopies * tarif1
} else if (nbPhotocopies) {
    prixFinal = 10 * tarif1 + (nbPhotocopies - 10) * tarif2
} else {
    prixFinal = 10 * tarif1 + 20 * tarif2 + (nbPhotocopies - 30) * tarif3
}