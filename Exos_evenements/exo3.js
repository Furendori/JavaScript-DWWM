newLi = document.getElementsByTagName("li")

for (let i = 0; i < newLi.length; i++) {
    newLi[i].addEventListener("mouseover", function() {
        let nextLi = this.nextElementSibling
        if (nextLi) {
            nextLi.style.backgroundColor = "red"
        }
    })

    newLi[i].addEventListener("mouseout", function() {
        let nextLi = this.nextElementSibling
        if (nextLi) {
            nextLi.style.backgroundColor = ""
        }
    })
}