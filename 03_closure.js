// Замыкания - по сути это функция внутри другой функции
//Замыкание это термин который описывает способность функции запоминать
// лексическое окружение в котором она была объявлена,
// и продолжать получать доступ к переменным из этого лексического окружения
// вне зависимости от того где она была вызвана.

//Лексическое окружение (lexical environment) — внутренняя,
// закрытая от прямого доступа структура движка для хранения
// в памяти таблицы (Environment Record) идентификаторов переменных
// и их значений, а так же значение this , и механизм для
// извлечения этих значений при обращении по имени, а так же
// ссылки на родительское лексическое окружение (Parent).

function createCalcFunction(n) {
    return function () {
        console.log(1000 * n)
    }
}

const calc = createCalcFunction(42)

calc()

const incrementer = a => b => a + b

console.log(incrementer(2)(3))

const urlGenerator = domain => url => `https://${url}.${domain}`

const comUrl = urlGenerator('com')
const uaUrl = urlGenerator('ua')

console.log(comUrl('google'))
console.log(comUrl('netflix'))

console.log(uaUrl('news'))
console.log(uaUrl('javascript'))

//=====================================
// Write your own function bind

function logPerson(...args) {
    console.log(args.length > 0
        ? `New data: ${args}`
        : `New data: nothing ;(`);

    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {
    name: 'Nastya',
    age: 23,
    job: 'Model'
}

const person2 = {
    name: 'Anna',
    age: 18,
    job: 'Waitress'
}

function bind(context, fn) {
    return function (...args) {
        fn.apply(context, args)
    }
}

bind(person1, logPerson)('Vasya')
bind(person2, logPerson)()

// function bound(fn) {
//     return function (context) {
//         fn.call(context)
//     }
// }
//
// const bind = bound(logPerson)
//
// bind(person1)
// bind(person2)
