let tabValues = []

let newForm = document.createElement('form')

let newLabel = document.createElement('label')
newLabel.textContent = 'Nom d\'utilisateur :'

let newInput = document.createElement('input')
newInput.type = 'text'
newInput.id = 'username'
newInput.name = 'username'

let label2 = document.createElement('label')
label2.textContent = 'Mot de passe :'

let input2 = document.createElement('input')
input2.type = 'password'
input2.id = 'password'
input2.name = 'password'

let label3 = document.createElement('label')
label3.textContent = 'Date de naissance'

let newSelect = document.createElement('select')
newSelect.name = 'birth'
newSelect.id = 'birth'

let currentYear = new Date().getFullYear()
let startYear = 1980

for (let year = startYear; year < currentYear; year++) {
    let option = document.createElement('option')
    option.value = year
    option.textContent = year
    newSelect.appendChild(option)
}


let submitBtn = document.createElement('button')
submitBtn.type = 'button'
submitBtn.textContent = 'Valider'
submitBtn.addEventListener('click', function() {
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    let birthDate = document.getElementById('birth').value

    tabValues.push(username)
    tabValues.push(password)
    tabValues.push(birthDate)
})

newForm.append(newLabel, newInput, label2, input2, label3, newSelect, submitBtn)

document.body.appendChild(newForm)


console.log(tabValues);