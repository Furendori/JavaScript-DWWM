let newLi = document.getElementsByTagName("li");
let keyPress = 0;

document.addEventListener("keydown", function () {
  if (keyPress < 4) {
    newLi[keyPress].style.backgroundColor = "red";
    keyPress++;
  }
});
