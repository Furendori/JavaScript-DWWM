let newH2 = document.createElement('h2')
newH2.textContent = 'HTML Links'
let newP = document.createElement('p')
newP.textContent = 'HTML Links are defined with the a tag'

let newLink = document.createElement('a')
newLink.href = "https://www.w3schools.com"
newLink.textContent = 'This is a link'

document.body.appendChild(newH2)
document.body.appendChild(newP)
document.body.appendChild(newLink)