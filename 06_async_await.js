//Асинхронная функция всегда возвращает промис!
//Async Await - синтаксический сахар - обертка над промисами
//позволяет более удобно писать  и  читать асинхронный код

//async всегда пишется у родительськой функции
//результат который попадает в метод then мы всегда можем
//получить синхронно в переменную используя ключевое слово await


const delay = ms => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(ms), ms)
    })
}
// delay(2000).then((ms) => console.log(`${ms / 1000} sec`))

const url = 'https://jsonplaceholder.typicode.com/todos'

// const fetchTodos = () => {
//     console.log('Fetch todo started...')
//     return delay(2000)
//         .then(() => fetch(url))
//         .then(response => response.json())
// }
//
// fetchTodos()
//     .then(data => console.log('Data:', data))
//     .catch(err => console.error(err))

const fetchAsyncTodos = async () => {
    try {
        console.log('Fetch todo started...')
        await delay(2000)
        const response = await fetch(url)
        const data = await response.json()
        console.log('Data:', data)
    } catch (e) {
        console.log(e)
    } finally {
        console.log('Finally')
    }

}

fetchAsyncTodos()