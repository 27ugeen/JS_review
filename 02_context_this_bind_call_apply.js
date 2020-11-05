// ключевое слово this  - динамично,
// оно всегда указывает на тот объект в контексте которого оно было вызвано
//this определяется тем, как вызывается функция, а не где она была объявлена.

// Контекст внутри стрелки определяется местом ее объявления,
// а не вызова, и ссылается на контекст родительской функции.

function hello() {
    console.log('Hello', this)
}

const person = {
    name: 'Max',
    age: 27,
    sayHello: hello,
    sayHelloWindow: hello.bind(window),
    loginfo: function (method, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is: ${this.name}`)
        console.log(`Age is: ${this.age}`)
        console.log(`Method is: ${method}`)
        console.log(`Phone is: ${phone}`)
        console.groupEnd()
    }
}

// person.sayHello()
// person.sayHelloWindow()
// person.loginfo()

const girl = {
    name: 'Anna',
    age: 23
}

person.loginfo.bind(girl, 'bind', '8888888')()
person.loginfo.call(girl, 'call', '8888888')
person.loginfo.apply(girl, ['apply', '8888888'])


//=================================================

const arr = [1, 2, 3, 4, 5]

Array.prototype.multBy = function (n) {
    return this.map(el => el * n)
}

console.log(arr.multBy(3))