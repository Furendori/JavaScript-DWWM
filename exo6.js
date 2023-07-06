let newUl = document.createElement("ul")
newUl.setAttribute("class", "newUl")

let li1 = document.createElement('li')
li1.textContent = 'Faire les courses'

let li2 = document.createElement('li')
li2.textContent = 'Regarder des films'

let li3 = document.createElement('li')
li3.textContent = 'Regarder des films'

let li4 = document.createElement('li')
li4.textContent = 'Regarder des films'

let newLi = document.getElementsByTagName('li')
let ligneSuppr;

for (let i = 0; i < newLi.length; i++) {
  for (let j = 0; j < newLi.length; j++) {
    newLi[i].addEventListener("click", function () {
      
    });
  }
}

document.body.appendChild(newUl)
newUl.appendChild(li1)
newUl.appendChild(li2)
newUl.appendChild(li3)
newUl.appendChild(li4)