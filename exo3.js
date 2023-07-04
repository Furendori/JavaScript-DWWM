let newP = document.createElement('p')
newP.textContent = 'This text is normal'

let newBoldP = document.createElement('p')
newBoldP.textContent = 'This text is bold'
newBoldP.style.fontWeight = 'bold'


document.body.appendChild(newP)
document.body.appendChild(newBoldP)