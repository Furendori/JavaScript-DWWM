let tableau = [22, 4, -2, 0, 16, 6]
let isSorted = false

// for (let i = 0; i < tableau.length; i++) {
//     for (let j = 0; j < tableau.length; j++) {
//         if (tableau[i] < tableau[j]) {
//             let number = tableau[i]
//             tableau[i] = tableau[j]
//             tableau[j] = number
//         }
//     }
// }


while (!isSorted) {
    isSorted = true
    for (let i = 0; i < tableau.length -1; i++) { //22
        if (tableau[i + 1] < tableau[i]) {
            isSorted = false
            let tempNb = tableau[i + 1]  //stockage temporaire de 22
            tableau[i + 1] = tableau[i]  //4/22
            tableau[i] = tempNb
        }
    }
}

// for (let count = 0; count < tableau.length - 1; count++) {
//     if (tableau[count] > tableau[count + 1]) {
//         let tempNb = tableau[count]
//         tableau[count] = tableau[count + 1]
//         tableau[count + 1] = tempNb

//     }
// }

console.log(tableau);