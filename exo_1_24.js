// let tabText = ["les", "premiers", "seront", "les", "derniers"]

// let reverseTabText = tabText.reverse()

// console.log(reverseTabText);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let tmp

for (let i = 0; i < (array.length / 2); i++) {
    tmp = array[i]
    array[i] = array[array.length - 1 - i]
    array[array.length - 1 - i] = tmp
    console.log(array)
}