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

let submitBtn = document.createElement('button')
submitBtn.type = 'button'
submitBtn.textContent = 'Valider'
submitBtn.addEventListener('click', function() {
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    tabValues.push(username)
    tabValues.push(password)
})



newForm.appendChild(newLabel)
newForm.appendChild(newInput)
newForm.appendChild(label2)
newForm.appendChild(input2)
newForm.appendChild(submitBtn)
document.body.appendChild(newForm)


console.log(tabValues);