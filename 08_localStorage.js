// localStorage работает только со строками
//localStorage отличается от cookies  -  он больше чем cookie
//данные из localStorage не улетают на сервер в отличии от cookies


const myNumber = 42

// localStorage.removeItem('number')
// console.log(localStorage.getItem('number'))
// localStorage.setItem('number', myNumber.toString())
// console.log(localStorage.getItem('number'))
// localStorage.clear()

const object = {
    name: 'Max',
    age: 26
}

localStorage.setItem('person', JSON.stringify(object))

const raw = localStorage.getItem('person')
const person = JSON.parse(raw)
person.age = 20

// console.log(person)
//================
// window.onstorage = () => {}
//событие вызывается если  происходит запись в localStorage
// в другой вкладке того же домена

window.addEventListener('storage', event => {
    console.log(event)
})