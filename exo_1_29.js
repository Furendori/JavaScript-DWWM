let dico =  ["Ananas", "Banane", "Citron", "Dragonfruit", "Kiwi", "Orange", "Tomate"]
let motATrouver = ""

motATrouver = prompt("Quel mot voulez-vous chercher ?")

for (let i = 0; i < dico.length; i++) {
    if (motATrouver !== dico[i]) {
        console.log("Le mot n'a pas été trouvé");
    } else {
        console.log("Le mot a été trouvé a l'index " + i);
    }
}