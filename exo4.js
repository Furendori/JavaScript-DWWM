let newLi = document.getElementsByTagName("li")

function hoverList(elementSurvole) {
    for (let i = 0; i < newLi.length; i++) {
        if (newLi[i] !== elementSurvole) {
            newLi.style.backgroundColor = "red"
        }
    }
}