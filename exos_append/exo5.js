let newH2 = document.createElement('h2')
newH2.textContent = 'Table with border'

let newP = document.createElement('p')
newP.textContent = 'Use the CSS border property to add a border to the table'

let newTable = document.createElement('table')
newTable.style.width = '100%'

let newTr = document.createElement('tr')
newTr.setAttribute('class', 'first-tr')

let newTh = document.createElement('th')
newTh.textContent = 'Firstname'

let th2 = document.createElement('th')
th2.textContent = 'Lastname'

let th3 = document.createElement('th')
th3.textContent = 'age'



let tr2 = document.createElement('tr')
tr2.setAttribute('class', 'second-tr')

let td1 = document.createElement('td')
td1.textContent = 'Jill'

let td2 = document.createElement('td')
td2.textContent = 'Smith'

let td3 = document.createElement('td')
td3.textContent = '50'



let tr3 = document.createElement('tr')
tr3.setAttribute('class', 'third-tr')

let td4 = document.createElement('td')
td4.textContent = 'Eve'

let td5 = document.createElement('td')
td5.textContent = 'Jackson'

let td6 = document.createElement('td')
td6.textContent = '90'



let tr4 = document.createElement('tr')
tr4.setAttribute('class', 'fourth-tr')

let td7 = document.createElement('td')
td7.textContent = 'John'

let td8 = document.createElement('td')
td8.textContent = 'Doe'

let td9 = document.createElement('td')
td9.textContent = '80'



document.body.appendChild(newH2)

document.body.appendChild(newP)

document.body.appendChild(newTable)

newTable.appendChild(newTr)

newTr.appendChild(newTh)

newTr.appendChild(th2)

newTr.appendChild(th3)

newTable.appendChild(tr2)

tr2.appendChild(td1)

tr2.appendChild(td2)

tr2.appendChild(td3)

newTable.appendChild(tr3)

tr3.appendChild(td4)

tr3.appendChild(td5)

tr3.appendChild(td6)

newTable.appendChild(tr4)

tr4.appendChild(td7)

tr4.appendChild(td8)

tr4.appendChild(td9)