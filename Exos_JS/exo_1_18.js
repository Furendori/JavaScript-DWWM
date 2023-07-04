let tableau1 = [4, 8, 7, 12]
let tableau2 = [3, 6]
let schtroumpf = 0;

tableau1.forEach(element1 => {
   tableau2.forEach(element2 => {
    schtroumpf += element1 * element2
   });
});

console.log("le schtroumpf est de " + schtroumpf);