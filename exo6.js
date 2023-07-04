let newH2 = document.createElement('h2')
newH2.textContent = 'A nested list'

let newP = document.createElement('p')
newP.textContent = 'Lists can be nested (list inside list) :'

let newUl = document.createElement('ul')

let newLi = document.createElement('li')
newLi.textContent = 'Coffee'

let secondLi = document.createElement('li')
secondLi.textContent = 'Tea'

let secondUl = document.createElement('ul')

let thirdLi = document.createElement('li')
thirdLi.textContent = 'Black Tea'

let fourthLi = document.createElement('li')
fourthLi.textContent = 'Green Tea'

let fifthLi = document.createElement('li')
fifthLi.textContent = 'Milk'


document.body.appendChild(newH2)
document.body.appendChild(newP)
document.body.appendChild(newUl)
newUl.appendChild(newLi)
newUl.appendChild(secondLi)
secondLi.appendChild(secondUl)
secondUl.appendChild(thirdLi)
secondUl.appendChild(fourthLi)
newUl.appendChild(fifthLi)