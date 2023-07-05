newUl = document.getElementsByClassName("newUl")
newLi = document.getElementsByTagName("li")

for (let i = 0; i < newLi.length; i++) {
    newLi[i].addEventListener("mouseover", function() {
        this.style.backgroundColor = "red"
    })

    newLi[i].addEventListener("mouseout", function() {
        this.style.backgroundColor = ""
    })
}