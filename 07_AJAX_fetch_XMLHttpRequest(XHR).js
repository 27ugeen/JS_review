//AJAX — метод отправки или запроса данных, с последующим обновлением
// интерфейса по этим данным, без необходимости перезагрузки страницы.
// За счет этого уменьшается время отклика
// и веб-страница становится более интерактивной.

//Fetch API — предоставляет интерфейс, набор методов и свойств,
// для отправки, получения и обработки ресурсов от сервера.

//Это XMLHttpRequest нового поколения.
// Он предоставляет улучшенный интерфейс для составления запросов к серверу
// и построен на обещаниях (promise)

const requestURL = 'https://jsonplaceholder.typicode.com/users'

//=================XHR=================

// const sendRequest = (method, url, body = null) => {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest()
//
//         xhr.open(method, url)
//
//         xhr.responseType = "json"
//         xhr.setRequestHeader('Content-Type', 'application/json')
//
//         xhr.onload = () => {
//             if (xhr.status >= 400) {
//                 reject(xhr.response)
//             }
//             resolve(xhr.response)
//         }
//
//         xhr.onerror = () => {
//             reject(xhr.response)
//         }
//
//         xhr.send(JSON.stringify(body))
//     })
//
// }
//
// // sendRequest('GET', requestURL)
// //     .then(data => console.log(data))
// //     .catch((err => console.log(err)))
//
// const body = {
//     name: 'Anna',
//     age: 23
// }
//
// sendRequest('POST', requestURL, body)
//     .then(data => console.log(data))
//     .catch((err => console.log(err)))

//===============Fetch===================

const sendRequest = (method, url, body = null) => {
    const headers = {
        'Content-Type': 'application/json'
    }

    const bodyPost = body !== null ? JSON.stringify(body) : null

    return fetch(url, {
        method,
        body: bodyPost,
        headers
    })
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            return response.json().then(error => {
                const e = new Error('Something went wrong...')
                e.data = error
                throw e
            })
        })
}

sendRequest('GET', requestURL)
    .then(data => console.log(data))
    .catch((err => console.log(err)))

const body = {
    name: 'Anna',
    age: 23
}

sendRequest('POST', requestURL, body)
    .then(data => console.log(data))
    .catch((err => console.log(err)))