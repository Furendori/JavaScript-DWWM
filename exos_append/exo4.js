const css = 'p.error { color : red }'

const style = document.createElement('style')
style.innerHTML = css
document.head.appendChild(style)

let newP = document.createElement('p')
newP.textContent = 'This a paragraph'
let newP2 = document.createElement('p')
newP2.textContent = 'This is a paragraph'

let errorP3 = document.createElement('p')
errorP3.setAttribute('class', 'error')
errorP3.textContent = 'I am different'

let newP4 = document.createElement('p')
newP4.textContent = 'This is a paragraph'

let errorP5 = document.createElement('p')
errorP5.setAttribute('class', 'error')
errorP5.textContent = 'I am different too'

document.body.appendChild(newP)
document.body.appendChild(newP2)
document.body.appendChild(errorP3)
document.body.appendChild(newP4)
document.body.appendChild(errorP5)