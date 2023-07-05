let nbrClicsP = document.getElementById("nbrClicsP")
let boutonClic = document.getElementById("boutonClic")

let nombreClics = 0

function clicIncrement() {
    nombreClics++
    nbrClicsP.textContent = "Nombre de clics : " + nombreClics
}