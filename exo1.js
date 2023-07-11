let filterSelect = document.getElementById('filter')
let apiList = document.getElementById('apiList')

function loadCategories(categories) {
    for (let i = 0; i < categories.length; i++) {
        let option = document.createElement('option')
        option.values = categories[i]
        option.textContent = categories[i]
        filterSelect.appendChild(option)
    }
}

function loadEntries(entries) {
    for (let i = 0; i < entries.length; i++) {
        let row = document.createElement('tr')

        let cName = document.createElement('td')
        let cDesc = document.createElement('td')
        let cAuth = document.createElement('td')
        let cHttps = document.createElement('td')
        let cCors = document.createElement('td')
        let cLink = document.createElement('td')
        let cCateg = document.createElement('td')

        cName.innerText
    }
}

fetch('https://api.publicapis.org/categories')
    .then(response => response.json())
    .then(response => response.categories)
    .then(loadCategories)

fetch('https://api.publicapis.org/entries')
    .then(response => response.json())
    .then(response => response.entries)
    .then(loadEntries)