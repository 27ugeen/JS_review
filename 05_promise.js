// Промисы позволяют избежать многоуровневой вложенности колбэков
//Позволяют легче ловить ошибки
//Промисы - определенная оббертка над асинхронностью,
// которая добавляет удобства для написания кода

// console.log('Request data...')

// setTimeout(() => {
//     console.log('Preparing data...')
//
//     const backendData = {
//         server: 'aws',
//         port: 3000,
//         status: 'working'
//     }
//
//     setTimeout(() => {
//         backendData.modified = true
//         console.log('Data recived', backendData)
//     }, 2000)
// }, 2000)

//====================

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Preparing data...')
//         const backendData = {
//             server: 'aws',
//             port: 3000,
//             status: 'working'
//         }
//         resolve(backendData)
//     }, 2000)
//
// })
//
// p
//     .then(data => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 data.modified = true
//                 resolve(data)
//             }, 2000)
//         })
//     })
//     .then(clientData => {
//         console.log('Data recived', clientData)
//     })
//     .catch(err => console.log('Error', err))
//     .finally(() => console.log('Finnaly'))

//========================

const sleep = ms => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(ms), ms)
    })
}

// sleep(2000).then((ms) => console.log(`After ${ms / 1000} sec`))
// sleep(4000).then((ms) => console.log(`After ${ms / 1000} sec`))
// sleep(6000).then((ms) => console.log(`After ${ms / 1000} sec`))

Promise.all([sleep(2000), sleep(5000)])
    .then(() => console.log('All promises'))

Promise.race([sleep(2000), sleep(5000)])
    .then(() => console.log('Race promises'))