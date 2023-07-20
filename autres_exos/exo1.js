let filterSelect = document.getElementById('filter')
let tbody = document.getElementsByTagName('tbody')
let baseUrl = 'https://api.publicapis.org'

function loadCategories(categories) {
    for (let i = 0; i < categories.length; i++) {
        let option = document.createElement('option')
        option.values = categories[i]
        option.textContent = categories[i]
        filterSelect.appendChild(option)
    }
}

function loadEntries(entries) {
    fetch(`${baseUrl}/entries`)
    .then(response => response.json())
    .then(datas => {
        for (let i = 0; i < datas.count; i++) {

            let selectNameOnHtml = document.getElementById('apiList')

            let createTr = document.createElement('tr')

            let createNameTh = document.createElement('th')

            createNameTh.textContent = datas.entries[i].API

            let createDescTh = document.createElement('th')

            createDescTh.textContent = datas.entries[i].Description

            let createAuthTh = document.createElement('th')

            createAuthTh.textContent = datas.entries[i].Auth

            let createHTTPSTh = document.createElement('th')

            createHTTPSTh.textContent = datas.entries[i].HTTPS

            let createCorsTh = document.createElement('th')

            createCorsTh.textContent = datas.entries[i].Cors

            let createLinkTh = document.createElement('th')

            createLinkTh.textContent = datas.entries[i].Link

            let createCategoryTh = document.createElement('th')

            createCategoryTh.textContent = datas.entries[i].Category

            createTr.append(createNameTh, createDescTh, createAuthTh, createHTTPSTh, createCorsTh, createLinkTh, createCategoryTh)

            selectNameOnHtml.appendChild(createTr)
    }
    })
}

loadEntries()

document.getElementById('filter').addEventListener ('change', () => {
    const apiList = document.getElementById('apiList')
    const filter = document.getElementById('filter')
    
    apiList.innerHTML = ''

    const filterValue = filter.value
    const apiEntriesByCategUrl = `${baseUrl}/entries?category=${filterValue}`
    loadCategories(apiEntriesByCategUrl)
})

fetch(`${baseUrl}/categories`)
    .then(response => response.json())
    .then(response => response.categories)
    .then(loadCategories)